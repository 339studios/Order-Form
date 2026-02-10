(function () {
  'use strict';

  // ─── Tab switching ─────────────────────────────────────────────────────
  document.querySelectorAll('.tab').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tabId = this.getAttribute('data-tab');
      document.querySelectorAll('.tab').forEach(function (b) { b.classList.remove('active'); });
      document.querySelectorAll('.panel').forEach(function (p) { p.classList.remove('active'); });
      this.classList.add('active');
      var panel = document.getElementById('panel-' + tabId);
      if (panel) panel.classList.add('active');
    });
  });

  // ─── NEW SHOES: brands and product families (styles/widths from Excel columns E, F) ───────
  var newShoesSizes = ['5','5.5','6','6.5','7','7.5','8','8.5','9','9.5','10','10.5','11','11.5','12','13','14','15','16'];
  var newShoesBrandConfig = {
    redwing: {
      pairsId: 'new-shoes-redwing-pairs',
      totalId: 'new-shoes-redwing-total',
      productFamilies: [
        {
          tbodyId: 'tbody-new-shoes-redwing-supersole',
          rows: [
            { brand: 'Red Wing', productFamily: 'SuperSole X', shipDate: '10/15/26', style: '2543', width: 'D', sizesEnd: 16 },
            { brand: '', productFamily: '', shipDate: '', style: '2543', width: 'E2', sizesEnd: 14 },
            { brand: '', productFamily: '', shipDate: '', style: '2543', width: 'E3', sizesEnd: 14 },
            { brand: '', productFamily: '', shipDate: '', style: '3577', width: 'D', sizesEnd: 16 },
            { brand: '', productFamily: '', shipDate: '', style: '3577', width: 'E2', sizesEnd: 14 },
            { brand: '', productFamily: '', shipDate: '', style: '3577', width: 'E3', sizesEnd: 14 },
            { brand: '', productFamily: '', shipDate: '', style: '3580', width: 'D', sizesEnd: 16 },
            { brand: '', productFamily: '', shipDate: '', style: '3580', width: 'E2', sizesEnd: 14 },
            { brand: '', productFamily: '', shipDate: '', style: '3580', width: 'E3', sizesEnd: 14 }
          ]
        },
        { tbodyId: 'tbody-new-shoes-redwing-exoslite', rows: [
          { brand: 'Red Wing', productFamily: 'ExosLite', shipDate: '08/15/26', style: '3593', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3593', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '3593', width: 'H', sizesEnd: 16 }
        ]},
        { tbodyId: 'tbody-new-shoes-redwing-ironflex', rows: [
          { brand: 'Red Wing', productFamily: 'IronFlex', shipDate: '08/15/26', style: '3740', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3740', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '3740', width: 'H', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3741', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3741', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '3741', width: 'H', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3742', width: 'B', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3742', width: 'D', sizesEnd: 16 }
        ]},
        { tbodyId: 'tbody-new-shoes-redwing-construct', rows: [
          { brand: 'Red Wing', productFamily: 'Construct', shipDate: '09/15/26', style: '1720', width: 'B', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '1720', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '1720', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '1720', width: 'H', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '2668', width: 'B', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '2668', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '2668', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '2668', width: 'H', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '2669', width: 'B', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '2669', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '2669', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '2669', width: 'H', sizesEnd: 16 }
        ]},
        { tbodyId: 'tbody-new-shoes-redwing-versapro', rows: [
          { brand: 'Red Wing', productFamily: 'VersaPro', shipDate: '08/15/26', style: '3056', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3056', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '3057', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3057', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '3058', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3058', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '3059', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3059', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '3054', width: 'B', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3054', width: 'D', sizesEnd: 16 }
        ]}
      ]
    },
    worx: {
      pairsId: 'new-shoes-worx-pairs',
      totalId: 'new-shoes-worx-total',
      productFamilies: [
        { tbodyId: 'tbody-new-shoes-worx-essentialedge', rows: [
          { brand: 'Worx', productFamily: 'Essentials Edge', shipDate: '08/15/26', style: '5077', width: 'M', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '5077', width: 'W2', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '5193', width: 'M', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '5193', width: 'W', sizesEnd: 16 }
        ]},
        { tbodyId: 'tbody-new-shoes-worx-cinder', rows: [
          { brand: 'Worx', productFamily: 'Cinder', shipDate: '08/15/26', style: '5195', width: 'M', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '5195', width: 'W', sizesEnd: 16 }
        ]}
      ]
    },
    irishsetter: {
      pairsId: 'new-shoes-irishsetter-pairs',
      totalId: 'new-shoes-irishsetter-total',
      productFamilies: [
        { tbodyId: 'tbody-new-shoes-irishsetter-traillock', rows: [
          { brand: 'Irish Setter', productFamily: 'Trail Lock', shipDate: '07/15/26', style: '3953', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3953', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '3954', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3954', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '3955', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3955', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '3956', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3956', width: 'E2', sizesEnd: 14 }
        ]},
        { tbodyId: 'tbody-new-shoes-irishsetter-trailblazer', rows: [
          { brand: 'Irish Setter', productFamily: 'Trailblazer', shipDate: '07/15/26', style: '3967', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3967', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '3968', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '3968', width: 'E2', sizesEnd: 14 }
        ]},
        { tbodyId: 'tbody-new-shoes-irishsetter-pipestone', rows: [
          { brand: 'Irish Setter', productFamily: 'Pipestone', shipDate: '07/15/26', style: '84600', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '84600', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '84602', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '84602', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '84603', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '84603', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '84604', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '84604', width: 'E2', sizesEnd: 14 }
        ]},
        { tbodyId: 'tbody-new-shoes-irishsetter-wingshooterxd', rows: [
          { brand: 'Irish Setter', productFamily: 'Wingshooter XD', shipDate: '07/15/26', style: '83892', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '83892', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '84670', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '84670', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '84672', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '84672', width: 'E2', sizesEnd: 14 },
          { brand: '', productFamily: '', shipDate: '', style: '84675', width: 'D', sizesEnd: 16 },
          { brand: '', productFamily: '', shipDate: '', style: '84675', width: 'E2', sizesEnd: 14 }
        ]}
      ]
    }
  };
  var defaultPricePerPair = 150;

  // Base path for images (works on GitHub Pages subpath and locally)
  function getImagesBase() {
    var base = (location.pathname || '').replace(/\/?index\.html$/i, '');
    if (base && !/\/$/.test(base)) base = base + '/';
    return base || '';
  }

  function renderNewShoesBrand(tbodyId, rows) {
    var tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    tbody.innerHTML = '';
    var grouped = [];
    var i, row, key;
    for (i = 0; i < rows.length; i++) {
      row = rows[i];
      key = row.style || '';
      if (grouped.indexOf(key) === -1) grouped.push(key);
    }
    grouped.forEach(function (styleKey) {
      var styleRows = rows.filter(function (r) { return (r.style || '') === styleKey; });
      styleRows.forEach(function (row, idx) {
        var tr = document.createElement('tr');
        var firstInGroup = idx === 0 && styleKey;
        var html = '';
        if (firstInGroup) {
          html += '<td class="new-shoes-style-img" rowspan="' + styleRows.length + '"><span class="new-shoes-style-num">' + styleKey + '</span><img src="' + getImagesBase() + 'Images/' + styleKey + '.png" alt="' + styleKey + '"><span class="new-shoes-style-price">$' + defaultPricePerPair + '</span></td>';
        } else if (!styleKey) {
          html += '<td></td>';
        }
        html += '<td class="new-shoes-width">' + (row.width || '') + '</td>';
        var sizesEnd = row.sizesEnd != null ? row.sizesEnd : 16;
        newShoesSizes.forEach(function (s) {
          var sizeNum = parseFloat(s, 10);
          var disabled = sizeNum > sizesEnd;
          var cls = disabled ? ' size-disabled' : '';
          html += '<td><input type="number" min="0" step="1" data-size="' + s + '" value="0"' + (disabled ? ' disabled' : '') + ' class="new-shoes-size' + cls + '"></td>';
        });
        html += '<td class="num-col new-shoes-total-pairs">0</td><td class="num-col new-shoes-row-total">0</td>';
        tr.innerHTML = html;
        tbody.appendChild(tr);
        tr.querySelectorAll('input:not([disabled])').forEach(function (input) {
          input.addEventListener('input', updateNewShoesRow);
        });
      });
    });
  }

  function renderNewShoes() {
    Object.keys(newShoesBrandConfig).forEach(function (key) {
      var config = newShoesBrandConfig[key];
      config.productFamilies.forEach(function (pf) {
        renderNewShoesBrand(pf.tbodyId, pf.rows);
      });
    });
  }

  function updateNewShoesRow() {
    Object.keys(newShoesBrandConfig).forEach(function (key) {
      var config = newShoesBrandConfig[key];
      config.productFamilies.forEach(function (pf) {
        var tbody = document.getElementById(pf.tbodyId);
        if (!tbody) return;
        tbody.querySelectorAll('tr').forEach(function (tr) {
          if (tr.classList.contains('new-shoes-style-group')) return;
          var inputs = tr.querySelectorAll('input.new-shoes-size:not([disabled])');
          var sum = 0;
          inputs.forEach(function (inp) { sum += parseInt(inp.value, 10) || 0; });
          var pairCell = tr.querySelector('.new-shoes-total-pairs');
          var totalCell = tr.querySelector('.new-shoes-row-total');
          if (pairCell) pairCell.textContent = sum;
          if (totalCell) totalCell.textContent = sum * defaultPricePerPair;
        });
      });
    });
    updateNewShoesTotals();
  }

  function updateNewShoesTotals() {
    var totalPairs = 0, totalDollars = 0;
    Object.keys(newShoesBrandConfig).forEach(function (key) {
      var config = newShoesBrandConfig[key];
      var brandPairs = 0, brandDollars = 0;
      config.productFamilies.forEach(function (pf) {
        var tbody = document.getElementById(pf.tbodyId);
        if (tbody) {
          tbody.querySelectorAll('tr').forEach(function (tr) {
            if (tr.classList.contains('new-shoes-style-group')) return;
            var p = tr.querySelector('.new-shoes-total-pairs');
            var t = tr.querySelector('.new-shoes-row-total');
            if (p) brandPairs += parseInt(p.textContent, 10) || 0;
            if (t) brandDollars += parseInt(t.textContent, 10) || 0;
          });
        }
      });
      totalPairs += brandPairs;
      totalDollars += brandDollars;
      var elP = document.getElementById(config.pairsId);
      var elT = document.getElementById(config.totalId);
      if (elP) elP.textContent = brandPairs;
      if (elT) elT.textContent = brandDollars;
    });
    var elPairs = document.getElementById('new-shoes-pairs');
    var elTotal = document.getElementById('new-shoes-total');
    if (elPairs) elPairs.textContent = totalPairs;
    if (elTotal) elTotal.textContent = totalDollars;
    updateGrandTotals();
  }

  // ─── EXISTING: manual entry rows ────────────────────────────────────────
  function renderExisting() {
    var tbody = document.getElementById('tbody-existing');
    tbody.innerHTML = '';
    for (var r = 0; r < 15; r++) {
      var tr = document.createElement('tr');
      tr.innerHTML = '<td><input type="text" placeholder="MMDDYY" class="existing-reqdate"></td><td><input type="text" class="existing-style"></td><td><input type="text" class="existing-width"></td>';
      for (var s = 1; s <= 16; s++) {
        tr.innerHTML += '<td><input type="number" min="0" value="0" class="existing-size"></td>';
      }
      tbody.appendChild(tr);
    }
    tbody.querySelectorAll('input').forEach(function (inp) {
      inp.addEventListener('input', updateExistingTotals);
    });
  }

  function updateExistingTotals() {
    var tbody = document.getElementById('tbody-existing');
    var totalPair = 0, totalPrice = 0;
    var defaultPrice = 120;
    tbody.querySelectorAll('tr').forEach(function (tr) {
      var sizeInputs = tr.querySelectorAll('.existing-size');
      var rowSum = 0;
      sizeInputs.forEach(function (i) { rowSum += parseInt(i.value, 10) || 0; });
      totalPair += rowSum;
      totalPrice += rowSum * defaultPrice;
    });
    var elP = document.getElementById('existing-total-pair');
    var elPr = document.getElementById('existing-total-price');
    if (elP) elP.textContent = totalPair;
    if (elPr) elPr.textContent = totalPrice;
    updateGrandTotals();
  }

  // ─── CARE PRODUCTS ──────────────────────────────────────────────────────
  var careProducts = [
    { cat: 'Headwear', shipDate: '081526', stock: '98059', desc: 'Logo Knit Beanie - Black', price: 60, uom: '6/pack' },
    { cat: '', shipDate: '081526', stock: '98060', desc: 'Logo Knit Beanie - Coyote Brown', price: 60, uom: '6/pack' },
    { cat: '', shipDate: '081526', stock: '98061', desc: 'Logo Knit Beanie - Dark Gray Heather', price: 60, uom: '6/pack' },
    { cat: '', shipDate: '081526', stock: '98062', desc: 'Logo Knit Beanie - Light Gray Heather', price: 60, uom: '6/pack' },
    { cat: '', shipDate: '081526', stock: '98063', desc: 'Logo Knit Beanie - Dark Denim', price: 60, uom: '6/pack' },
    { cat: '', shipDate: '081526', stock: '98064', desc: 'Logo Knit Beanie - Olive', price: 60, uom: '6/pack' },
    { cat: 'New Laces', shipDate: '081526', stock: '93023', desc: '54" Heavy Duty Kevlar - Black', price: 108, uom: '12 Pair (hang card)' },
    { cat: '', shipDate: '081526', stock: '93024', desc: '63" Heavy Duty Kevlar - Black', price: 108, uom: '12 Pair (hang card)' },
    { cat: 'Wallet / Cardholder', shipDate: '081526', stock: '96582', desc: 'Bifold Wallet - Black', price: 150, uom: '3/pack' },
    { cat: '', shipDate: '081526', stock: '96583', desc: 'Bifold Wallet - Oro', price: 150, uom: '3/pack' },
    { cat: '', shipDate: '081526', stock: '96587', desc: 'Card Holder - Black', price: 90, uom: '3/pack' },
    { cat: '', shipDate: '081526', stock: '96588', desc: 'Card Holder - Oro', price: 90, uom: '3/pack' },
    { cat: '', shipDate: '091526', stock: '95085', desc: 'Wallet & Keychain Gift Box - Black', price: 390, uom: '6/pack' },
    { cat: '', shipDate: '091526', stock: '95086', desc: 'Wallet & Keychain Gift Box - Oro', price: 390, uom: '6/pack' },
    { cat: 'Keychain', shipDate: '081526', stock: '95076', desc: 'Leather Keychain - Black', price: 60, uom: '3/pack' },
    { cat: '', shipDate: '081526', stock: '95077', desc: 'Leather Keychain - Oro', price: 60, uom: '3/pack' }
  ];

  function renderCare() {
    var tbody = document.getElementById('tbody-care');
    tbody.innerHTML = '';
    careProducts.forEach(function (p) {
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td>' + (p.cat || '') + '</td>' +
        '<td>' + p.shipDate + '</td>' +
        '<td>' + p.stock + '</td>' +
        '<td>' + p.desc + '</td>' +
        '<td class="num-col care-price">' + p.price + '</td>' +
        '<td>' + p.uom + '</td>' +
        '<td><input type="number" min="0" value="0" class="care-qty"></td>' +
        '<td class="num-col care-row-total">0</td>';
      tbody.appendChild(tr);
      tr.querySelector('.care-qty').addEventListener('input', function () {
        var qty = parseInt(this.value, 10) || 0;
        tr.querySelector('.care-row-total').textContent = qty * p.price;
        updateCareTotals();
      });
    });
  }

  function updateCareTotals() {
    var tbody = document.getElementById('tbody-care');
    var totalQty = 0, totalPrice = 0;
    tbody.querySelectorAll('tr').forEach(function (tr) {
      var q = tr.querySelector('.care-qty');
      var t = tr.querySelector('.care-row-total');
      if (q) totalQty += parseInt(q.value, 10) || 0;
      if (t) totalPrice += parseInt(t.textContent, 10) || 0;
    });
    var elQ = document.getElementById('care-total-qty');
    var elP = document.getElementById('care-total-price');
    if (elQ) elQ.textContent = totalQty;
    if (elP) elP.textContent = totalPrice;
    updateGrandTotals();
  }

  // ─── SOCKS ──────────────────────────────────────────────────────────────
  var sockSizes = ['03060','04070','06090','07100','09120','10130','12150','12160'];
  function renderSocks() {
    var tbody = document.getElementById('tbody-socks');
    tbody.innerHTML = '';
    var rows = [
      { shipDate: '', stock: '', desc: '6 pr.', price: 0 },
      { shipDate: '', stock: '', desc: '6 pr.', price: 0 },
      { shipDate: '', stock: '', desc: '6 pr.', price: 0 },
      { shipDate: '', stock: '', desc: '6 pr.', price: 0 }
    ];
    rows.forEach(function (row) {
      var tr = document.createElement('tr');
      tr.innerHTML = '<td><input type="text" placeholder="Ship Date"></td><td><input type="text"></td>';
      sockSizes.forEach(function () {
        tr.innerHTML += '<td><input type="number" min="0" value="0" class="sock-size"></td>';
      });
      tr.innerHTML += '<td class="num-col sock-row-qty">0</td><td class="num-col">—</td><td class="num-col sock-row-total">0</td>';
      tbody.appendChild(tr);
      tr.querySelectorAll('.sock-size').forEach(function (inp) {
        inp.addEventListener('input', function () {
          var sum = 0;
          tr.querySelectorAll('.sock-size').forEach(function (i) { sum += parseInt(i.value, 10) || 0; });
          tr.querySelector('.sock-row-qty').textContent = sum;
          tr.querySelector('.sock-row-total').textContent = sum * (row.price || 0);
          updateSocksTotals();
        });
      });
    });
  }

  function updateSocksTotals() {
    var tbody = document.getElementById('tbody-socks');
    var totalQty = 0, totalPrice = 0;
    tbody.querySelectorAll('tr').forEach(function (tr) {
      var q = tr.querySelector('.sock-row-qty');
      var t = tr.querySelector('.sock-row-total');
      if (q) totalQty += parseInt(q.textContent, 10) || 0;
      if (t) totalPrice += parseInt(t.textContent, 10) || 0;
    });
    setText('socks-total-qty', totalQty);
    setText('socks-total-price', totalPrice);
    updateGrandTotals();
  }

  // ─── FOOTBEDS ────────────────────────────────────────────────────────────
  var footbedSizes = ['3','4','5','6','7','8','9','10','11','12','13','14','15','16'];
  function renderFootbeds() {
    var tbody = document.getElementById('tbody-footbeds');
    tbody.innerHTML = '';
    var row = { shipDate: '', stock: '16.5', desc: '', price: 0 };
    var tr = document.createElement('tr');
    tr.innerHTML = '<td><input type="text"></td><td>' + row.stock + '</td><td><input type="text"></td>';
    footbedSizes.forEach(function () {
      tr.innerHTML += '<td><input type="number" min="0" value="0" class="footbed-size"></td>';
    });
    tr.innerHTML += '<td class="num-col footbed-row-qty">0</td><td class="num-col">—</td><td class="num-col footbed-row-total">0</td>';
    tbody.appendChild(tr);
    tr.querySelectorAll('.footbed-size').forEach(function (inp) {
      inp.addEventListener('input', function () {
        var sum = 0;
        tr.querySelectorAll('.footbed-size').forEach(function (i) { sum += parseInt(i.value, 10) || 0; });
        tr.querySelector('.footbed-row-qty').textContent = sum;
        tr.querySelector('.footbed-row-total').textContent = 0;
        updateFootbedsTotals();
      });
    });
  }

  function updateFootbedsTotals() {
    var tbody = document.getElementById('tbody-footbeds');
    var totalQty = 0, totalPrice = 0;
    tbody.querySelectorAll('tr').forEach(function (tr) {
      var q = tr.querySelector('.footbed-row-qty');
      var t = tr.querySelector('.footbed-row-total');
      if (q) totalQty += parseInt(q.textContent, 10) || 0;
      if (t) totalPrice += parseInt(t.textContent, 10) || 0;
    });
    setText('footbeds-total-qty', totalQty);
    setText('footbeds-total-price', totalPrice);
    updateGrandTotals();
  }

  // ─── BELTS ───────────────────────────────────────────────────────────────
  var beltSizes = ['W26','W28','W30','W32','W34','W36','W38','W40','W42','W44','W46','W48','W50','W52','W54'];
  var beltProducts = [
    { shipDate: '081526', stock: '96594', desc: 'Leather-Lined Nylon Work Belt', price: 40 },
    { shipDate: '081526', stock: '96595', desc: 'Heavy Duty Leather Comfort Belt', price: 40 }
  ];
  function renderBelts() {
    var tbody = document.getElementById('tbody-belts');
    tbody.innerHTML = '';
    beltProducts.forEach(function (p) {
      var tr = document.createElement('tr');
      tr.innerHTML = '<td>' + p.shipDate + '</td><td>' + p.stock + '</td><td>' + p.desc + '</td>';
      beltSizes.forEach(function () {
        tr.innerHTML += '<td><input type="number" min="0" value="0" class="belt-size"></td>';
      });
      tr.innerHTML += '<td class="num-col belt-row-qty">0</td><td class="num-col">' + p.price + '</td><td class="num-col belt-row-total">0</td>';
      tbody.appendChild(tr);
      tr.querySelectorAll('.belt-size').forEach(function (inp) {
        inp.addEventListener('input', function () {
          var sum = 0;
          tr.querySelectorAll('.belt-size').forEach(function (i) { sum += parseInt(i.value, 10) || 0; });
          tr.querySelector('.belt-row-qty').textContent = sum;
          tr.querySelector('.belt-row-total').textContent = sum * p.price;
          updateBeltsTotals();
        });
      });
    });
  }

  function updateBeltsTotals() {
    var tbody = document.getElementById('tbody-belts');
    var totalQty = 0, totalPrice = 0;
    tbody.querySelectorAll('tr').forEach(function (tr) {
      var q = tr.querySelector('.belt-row-qty');
      var t = tr.querySelector('.belt-row-total');
      if (q) totalQty += parseInt(q.textContent, 10) || 0;
      if (t) totalPrice += parseInt(t.textContent, 10) || 0;
    });
    setText('belts-total-qty', totalQty);
    setText('belts-total-price', totalPrice);
    updateGrandTotals();
  }

  // ─── GLOVES ──────────────────────────────────────────────────────────────
  var gloveSizes = ['XSM','SML','MED','LRG','XLG','XXL'];
  var gloveProducts = [
    { shipDate: '081525', stock: '96538', desc: 'Quick Release Nylon Web Belt - Black', price: 27 },
    { shipDate: '081525', stock: '96593', desc: 'Quick Release Nylon Web Belt - Copper', price: 27 }
  ];
  function renderGloves() {
    var tbody = document.getElementById('tbody-gloves');
    tbody.innerHTML = '';
    gloveProducts.forEach(function (p) {
      var tr = document.createElement('tr');
      tr.innerHTML = '<td>' + p.shipDate + '</td><td>' + p.stock + '</td><td>' + p.desc + '</td>';
      gloveSizes.forEach(function () {
        tr.innerHTML += '<td><input type="number" min="0" value="0" class="glove-size"></td>';
      });
      tr.innerHTML += '<td class="num-col glove-row-qty">0</td><td class="num-col">' + p.price + '</td><td class="num-col glove-row-total">0</td>';
      tbody.appendChild(tr);
      tr.querySelectorAll('.glove-size').forEach(function (inp) {
        inp.addEventListener('input', function () {
          var sum = 0;
          tr.querySelectorAll('.glove-size').forEach(function (i) { sum += parseInt(i.value, 10) || 0; });
          tr.querySelector('.glove-row-qty').textContent = sum;
          tr.querySelector('.glove-row-total').textContent = sum * p.price;
          updateGlovesTotals();
        });
      });
    });
  }

  function updateGlovesTotals() {
    var tbody = document.getElementById('tbody-gloves');
    var totalQty = 0, totalPrice = 0;
    tbody.querySelectorAll('tr').forEach(function (tr) {
      var q = tr.querySelector('.glove-row-qty');
      var t = tr.querySelector('.glove-row-total');
      if (q) totalQty += parseInt(q.textContent, 10) || 0;
      if (t) totalPrice += parseInt(t.textContent, 10) || 0;
    });
    setText('gloves-total-qty', totalQty);
    setText('gloves-total-price', totalPrice);
    updateGrandTotals();
  }

  // ─── SLIPPERS ────────────────────────────────────────────────────────────
  var slipperSizes = ['050','060','070','080','085','090','095','100','105','110','115','120','130','140','150','160'];
  var slipperProducts = [
    { shipDate: '091526', stock: '97540', desc: 'DRIFT MOC- BROWN', width: 'M', price: 57.5 },
    { shipDate: '', stock: '97528', desc: 'DRIFT MOC- BROWN', width: 'M', price: 55 },
    { shipDate: '', stock: '97529', desc: 'DRIFT MOC- GRAY', width: 'M', price: 55 },
    { shipDate: '', stock: '97530', desc: 'DRIFT SLIP ON- CREAM', width: 'M', price: 55 },
    { shipDate: '', stock: '97531', desc: 'DRIFT SLIP ON- GRAY', width: 'M', price: 55 },
    { shipDate: '', stock: '97532', desc: 'DRIFT SLIP ON- BLACK', width: 'M', price: 55 },
    { shipDate: '', stock: '97533', desc: 'DRIFT SLIP ON- ORO', width: 'M', price: 55 }
  ];
  function renderSlippers() {
    var tbody = document.getElementById('tbody-slippers');
    tbody.innerHTML = '';
    slipperProducts.forEach(function (p) {
      var tr = document.createElement('tr');
      tr.innerHTML = '<td>' + (p.shipDate || '') + '</td><td>' + p.stock + '</td><td>' + p.desc + '</td><td>' + p.width + '</td>';
      slipperSizes.forEach(function () {
        tr.innerHTML += '<td><input type="number" min="0" value="0" class="slipper-size"></td>';
      });
      tr.innerHTML += '<td class="num-col">' + p.price + '</td><td class="num-col slipper-row-qty">0</td><td class="num-col slipper-row-total">0</td>';
      tbody.appendChild(tr);
      tr.querySelectorAll('.slipper-size').forEach(function (inp) {
        inp.addEventListener('input', function () {
          var sum = 0;
          tr.querySelectorAll('.slipper-size').forEach(function (i) { sum += parseInt(i.value, 10) || 0; });
          tr.querySelector('.slipper-row-qty').textContent = sum;
          tr.querySelector('.slipper-row-total').textContent = (sum * p.price).toFixed(2);
          updateSlippersTotals();
        });
      });
    });
  }

  function updateSlippersTotals() {
    var tbody = document.getElementById('tbody-slippers');
    var totalQty = 0, totalPrice = 0;
    tbody.querySelectorAll('tr').forEach(function (tr) {
      var q = tr.querySelector('.slipper-row-qty');
      var t = tr.querySelector('.slipper-row-total');
      if (q) totalQty += parseInt(q.textContent, 10) || 0;
      if (t) totalPrice += parseFloat(t.textContent) || 0;
    });
    setText('slippers-total-qty', totalQty);
    setText('slippers-total-price', totalPrice.toFixed(2));
    updateGrandTotals();
  }

  // ─── SAFETY GLASSES ──────────────────────────────────────────────────────
  function renderGlasses() {
    var tbody = document.getElementById('tbody-glasses');
    tbody.innerHTML = '';
    for (var i = 0; i < 10; i++) {
      var tr = document.createElement('tr');
      tr.innerHTML = '<td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="number" min="0" class="glass-price" placeholder="Price"></td><td>12 pair</td><td><input type="number" min="0" value="0" class="glass-qty"></td><td class="num-col glass-row-total">0</td>';
      tbody.appendChild(tr);
      var priceInp = tr.querySelector('.glass-price');
      var qtyInp = tr.querySelector('.glass-qty');
      function updateRow() {
        var price = parseFloat(priceInp.value) || 0;
        var qty = parseInt(qtyInp.value, 10) || 0;
        tr.querySelector('.glass-row-total').textContent = (price * qty).toFixed(2);
        updateGlassesTotals();
      }
      priceInp.addEventListener('input', updateRow);
      qtyInp.addEventListener('input', updateRow);
    }
  }

  function updateGlassesTotals() {
    var tbody = document.getElementById('tbody-glasses');
    var totalQty = 0, totalPrice = 0;
    tbody.querySelectorAll('tr').forEach(function (tr) {
      var q = tr.querySelector('.glass-qty');
      var t = tr.querySelector('.glass-row-total');
      if (q) totalQty += parseInt(q.value, 10) || 0;
      if (t) totalPrice += parseFloat(t.textContent) || 0;
    });
    setText('glasses-total-qty', totalQty);
    setText('glasses-total-price', totalPrice.toFixed(2));
    updateGrandTotals();
  }

  function setText(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  // ─── Grand totals ────────────────────────────────────────────────────────
  function updateGrandTotals() {
    var newShoes = parseInt(document.getElementById('new-shoes-total')?.textContent || '0', 10);
    var existing = parseInt(document.getElementById('existing-total-price')?.textContent || '0', 10);
    var care = parseFloat(document.getElementById('care-total-price')?.textContent || '0');
    var socks = parseFloat(document.getElementById('socks-total-price')?.textContent || '0');
    var footbeds = parseFloat(document.getElementById('footbeds-total-price')?.textContent || '0');
    var belts = parseFloat(document.getElementById('belts-total-price')?.textContent || '0');
    var gloves = parseFloat(document.getElementById('gloves-total-price')?.textContent || '0');
    var slippers = parseFloat(document.getElementById('slippers-total-price')?.textContent || '0');
    var glasses = parseFloat(document.getElementById('glasses-total-price')?.textContent || '0');

    var grandFootwear = newShoes + existing;
    var totalAccess = care + socks + footbeds + belts + gloves + slippers + glasses;
    var orderGrand = grandFootwear + totalAccess;

    setText('grand-total-footwear', grandFootwear.toLocaleString());
    setText('order-grand-total', orderGrand.toLocaleString());
  }

  // ─── Init ───────────────────────────────────────────────────────────────
  renderNewShoes();
  renderExisting();
  renderCare();
  renderSocks();
  renderFootbeds();
  renderBelts();
  renderGloves();
  renderSlippers();
  renderGlasses();
  updateGrandTotals();
})();
