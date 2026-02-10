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
  var newShoesSizes = ['4','4.5','5','5.5','6','6.5','7','7.5','8','8.5','9','9.5','10','10.5','11','11.5','12','13','14','15','16'];
  var newShoesAvailableSizes = {"2543-D":["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15","16"],"2543-E2":["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"2543-E3":["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3577-D":["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15","16"],"3577-E2":["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3577-E3":["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3580-D":["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15","16"],"3580-E2":["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3580-E3":["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3593-D":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3593-E2":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3593-H":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3740-D":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"3740-E2":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"3740-H":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3741-D":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"3741-E2":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"3741-H":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3742-B":["4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11"],"3742-D":["4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11"],"1720-B":["10","10.5","11","11.5","12","13","14"],"1720-D":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"1720-E2":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"1720-H":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"2668-B":["10","10.5","11","11.5","12","13","14"],"2668-D":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"2668-E2":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"2668-H":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"2669-B":["10","10.5","11","11.5","12","13","14"],"2669-D":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"2669-E2":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"2669-H":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3056-D":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"3056-E2":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3057-D":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"3057-E2":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3058-D":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"3058-E2":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3059-D":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"3059-E2":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3054-B":["4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","12"],"3054-D":["4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","12"],"5077-M":["7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"5077-W2":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"5193-M":["4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","12"],"5193-W":["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","12"],"5195-M":["4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","12"],"5195-W":["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11"],"3953-D":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3953-E2":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3954-D":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3954-E2":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3955-D":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3955-E2":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3956-D":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3956-E2":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3967-D":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3967-E2":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3968-D":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"3968-E2":["8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"84600-D":["4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"84600-E2":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"84602-D":["4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"84602-E2":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"84603-D":["4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"84603-E2":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"84604-D":["4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"84604-E2":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"83892-D":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"83892-E2":["7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"84670-D":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"84670-E2":["7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"84672-D":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"84672-E2":["7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"],"84675-D":["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14","15"],"84675-E2":["7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13","14"]};
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
  // Price per pair by style from Excel NEW SHOES Price/Pr column
  var newShoesStylePrice = { "1720": 135, "2543": 180, "2668": 145, "2669": 140, "3054": 120, "3056": 115, "3057": 120, "3058": 125, "3059": 135, "3577": 190, "3580": 190, "3593": 157.5, "3740": 145, "3741": 130, "3742": 145, "3953": 115, "3954": 120, "3955": 120, "3956": 125, "3967": 117.5, "3968": 117.5, "5077": 60, "5193": 60, "5195": 72.5, "83892": 140, "84600": 75, "84602": 75, "84603": 70, "84604": 75, "84670": 140, "84672": 135, "84675": 125 };
  // Package size/width distribution from Excel SKU Dist (brand -> package -> width -> sizes)
  var newShoesPackageSizes = { redwing: { A: { B: ["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","12"], D: ["7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13"], E2: ["8.5","9","9.5","10","10.5","11","11.5","12","13"], H: ["9","9.5","10","10.5","11","12"], E3: ["9","9.5","10","10.5","11","12"] }, B: { B: ["7","7.5","8","8.5","9"], D: ["7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13"], E2: ["9.5","10","10.5","11","11.5","12"], H: [], E3: [] }, C: { B: [], D: ["8.5","9","9.5","10","10.5","11","11.5","12"], E2: ["9","9.5","10","10.5","11","12"], H: [], E3: [] }, D: { B: [], D: ["9","9.5","10","10.5","11","11.5","12"], E2: ["10","10.5","11"], H: [], E3: [] } }, worx: { A: { M: ["6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13"], W2: ["8.5","9","9.5","10","10.5","11","11.5","12","13"], W: ["7","7.5","8","8.5","9","9.5","10"] }, B: { M: ["7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13"], W2: ["9.5","10","10.5","11","11.5","12"], W: ["7.5","8","8.5","9"] }, C: { M: ["8.5","9","9.5","10","10.5","11","11.5","12"], W2: ["9","9.5","10","10.5","11","12"] }, D: { M: ["9","9.5","10","10.5","11","11.5","12"], W2: ["10","10.5","11"] } }, irishsetter: { A: { D: ["7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13"], E2: ["8.5","9","9.5","10","10.5","11","11.5","12","13"], B: ["6","6.5","7","7.5","8","8.5","9","9.5","10"] }, B: { D: ["7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","13"], E2: ["9.5","10","10.5","11","11.5","12"], B: ["7","7.5","8","8.5","9"] }, C: { D: ["8.5","9","9.5","10","10.5","11","11.5","12"], E2: ["9","9.5","10","10.5","11","12"] }, D: { D: ["9","9.5","10","10.5","11","11.5","12"], E2: ["10","10.5","11"] } } };
  // Package quantities from Excel SKU Dist (brand -> package -> width -> { size: qty })
  var newShoesPackageQuantities = { redwing: { A: { B: { "9":1,"9.5":1,"10":1,"10.5":1,"11":1,"12":1 }, D: { "8":1,"8.5":1,"9":2,"9.5":2,"10":3,"10.5":3,"11":3,"11.5":1,"12":2,"13":1 }, E2: { "8.5":1,"9":1,"9.5":1,"10":2,"10.5":2,"11":2,"11.5":1,"12":1,"13":1 }, H: { "9":1,"9.5":1,"10":1,"10.5":1,"11":1,"12":1 }, E3: { "9":1,"9.5":1,"10":1,"10.5":1,"11":1,"12":1 } }, B: { D: { "8.5":1,"9":2,"9.5":2,"10":3,"10.5":3,"11":3,"11.5":1,"12":2,"13":1 }, E2: { "9.5":1,"10":2,"10.5":2,"11":2,"11.5":1,"12":1 } }, C: { D: { "8.5":1,"9":1,"9.5":2,"10":2,"10.5":2,"11":2,"11.5":1,"12":2 }, E2: { "9":1,"9.5":1,"10":1,"10.5":1,"11":1,"12":1 } }, D: { D: { "9":1,"9.5":1,"10":2,"10.5":2,"11":1,"11.5":1,"12":1 }, E2: { "10":1,"10.5":1,"11":1 } } }, worx: { A: { M: { "8":1,"8.5":1,"9":2,"9.5":2,"10":3,"10.5":3,"11":3,"11.5":1,"12":2,"13":1 }, W2: { "8.5":1,"9":1,"9.5":1,"10":2,"10.5":2,"11":2,"11.5":1,"12":1,"13":1 }, W: { "7":1,"7.5":1,"8":2,"8.5":2,"9":1,"9.5":1,"10":1 } }, B: { M: { "8.5":1,"9":2,"9.5":2,"10":3,"10.5":3,"11":3,"11.5":1,"12":2,"13":1 }, W2: { "9.5":1,"10":2,"10.5":2,"11":2,"11.5":1,"12":1 }, W: { "7.5":1,"8":1,"8.5":1,"9":1 } }, C: { M: { "8.5":1,"9":1,"9.5":2,"10":2,"10.5":2,"11":2,"11.5":1,"12":2 }, W2: { "9":1,"9.5":1,"10":1,"10.5":1,"11":1,"12":1 } }, D: { M: { "9":1,"9.5":1,"10":2,"10.5":2,"11":1,"11.5":1,"12":1 }, W2: { "10":1,"10.5":1,"11":1 } } }, irishsetter: { A: { D: { "8":1,"8.5":1,"9":2,"9.5":2,"10":3,"10.5":3,"11":3,"11.5":1,"12":2,"13":1 }, E2: { "8.5":1,"9":1,"9.5":1,"10":2,"10.5":2,"11":2,"11.5":1,"12":1,"13":1 }, B: { "6":1,"6.5":1,"7":1,"7.5":2,"8":2,"8.5":2,"9":1,"9.5":1,"10":1 } }, B: { D: { "8.5":1,"9":2,"9.5":2,"10":3,"10.5":3,"11":3,"11.5":1,"12":2,"13":1 }, E2: { "9.5":1,"10":2,"10.5":2,"11":2,"11.5":1,"12":1 }, B: { "7":1,"7.5":2,"8":2,"8.5":2,"9":1 } }, C: { D: { "8.5":1,"9":1,"9.5":2,"10":2,"10.5":2,"11":2,"11.5":1,"12":2 }, E2: { "9":1,"9.5":1,"10":1,"10.5":1,"11":1,"12":1 } }, D: { D: { "9":1,"9.5":1,"10":2,"10.5":2,"11":1,"11.5":1,"12":1 }, E2: { "10":1,"10.5":1,"11":1 } } } };

  // Base path for images (works on GitHub Pages subpath and locally)
  function formatCurrency(n) {
    var num = Math.round(Number(n)) || 0;
    return '$' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  function parseCurrencyText(text) {
    return parseInt(String(text).replace(/[$,]/g, ''), 10) || 0;
  }

  function fillPackageQuantitiesToStyleGroup(trWithSelect, packageVal) {
    var tbody = trWithSelect.closest('tbody');
    if (!tbody) return;
    var brand = trWithSelect.dataset.brand;
    var style = trWithSelect.dataset.style;
    var styleRows = tbody.querySelectorAll('tr[data-style="' + style + '"]');
    styleRows.forEach(function (tr) {
      var width = tr.dataset.width;
      var qtyMap = (packageVal && newShoesPackageQuantities[brand] && newShoesPackageQuantities[brand][packageVal] && newShoesPackageQuantities[brand][packageVal][width]) ? newShoesPackageQuantities[brand][packageVal][width] : {};
      tr.querySelectorAll('input.new-shoes-size').forEach(function (inp) {
        var s = inp.getAttribute('data-size');
        inp.value = (qtyMap[s] != null) ? String(qtyMap[s]) : '';
      });
    });
    updateNewShoesRow();
  }

  function getImagesBase() {
    var base = (location.pathname || '').replace(/\/?index\.html$/i, '');
    if (base && !/\/$/.test(base)) base = base + '/';
    return base || '';
  }

  function renderNewShoesBrand(tbodyId, rows, brandKey) {
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
        tr.dataset.brand = brandKey;
        tr.dataset.style = row.style || '';
        tr.dataset.width = row.width || '';
        var firstInGroup = idx === 0 && styleKey;
        var pricePerPair = (newShoesStylePrice[styleKey] != null) ? newShoesStylePrice[styleKey] : defaultPricePerPair;
        var html = '';
        if (firstInGroup) {
          html += '<td class="new-shoes-style-img" rowspan="' + styleRows.length + '"><span class="new-shoes-style-num">' + styleKey + '</span><img src="' + getImagesBase() + 'Images/' + styleKey + '.png" alt="' + styleKey + '"><span class="new-shoes-style-price">$' + pricePerPair + '</span></td>';
          html += '<td class="new-shoes-package" rowspan="' + styleRows.length + '"><select class="new-shoes-package-select"><option value="" selected></option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option></select></td>';
        } else if (!styleKey) {
          html += '<td></td><td></td>';
        }
        html += '<td class="new-shoes-width">' + (row.width || '') + '</td>';
        var rowKey = row.style + '-' + row.width;
        var avail = newShoesAvailableSizes[rowKey];
        if (!avail && row.sizesEnd != null) {
          var end = row.sizesEnd;
          avail = newShoesSizes.filter(function (s) { return parseFloat(s, 10) <= end; });
        }
        if (!avail) avail = newShoesSizes.slice();
        newShoesSizes.forEach(function (s) {
          if (avail.indexOf(s) !== -1) {
            html += '<td class="new-shoes-size-cell"><input type="number" min="0" step="1" data-size="' + s + '" class="new-shoes-size"></td>';
          } else {
            html += '<td class="cell-unavailable new-shoes-size-cell"></td>';
          }
        });
        html += '<td class="num-col new-shoes-total-pairs">0</td><td class="num-col new-shoes-row-total">0</td>';
        tr.innerHTML = html;
        tbody.appendChild(tr);
        tr.querySelectorAll('input.new-shoes-size').forEach(function (input) {
          input.addEventListener('input', updateNewShoesRow);
        });
        if (firstInGroup && styleKey) {
          tr.querySelector('.new-shoes-package-select').addEventListener('change', function () {
            fillPackageQuantitiesToStyleGroup(tr, this.value);
          });
        }
      });
    });
  }

  function renderNewShoes() {
    Object.keys(newShoesBrandConfig).forEach(function (key) {
      var config = newShoesBrandConfig[key];
      config.productFamilies.forEach(function (pf) {
        renderNewShoesBrand(pf.tbodyId, pf.rows, key);
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
          var inputs = tr.querySelectorAll('input.new-shoes-size');
          var sum = 0;
          inputs.forEach(function (inp) { sum += parseInt(inp.value, 10) || 0; });
          var pairCell = tr.querySelector('.new-shoes-total-pairs');
          var totalCell = tr.querySelector('.new-shoes-row-total');
          var pricePerPair = (newShoesStylePrice[tr.dataset.style] != null) ? newShoesStylePrice[tr.dataset.style] : defaultPricePerPair;
          if (pairCell) pairCell.textContent = sum;
          if (totalCell) totalCell.textContent = formatCurrency(sum * pricePerPair);
        });
      });
    });
    updateNewShoesFamilyTotals();
    updateNewShoesTotals();
  }

  function updateNewShoesFamilyTotals() {
    Object.keys(newShoesBrandConfig).forEach(function (key) {
      var config = newShoesBrandConfig[key];
      config.productFamilies.forEach(function (pf) {
        var tbody = document.getElementById(pf.tbodyId);
        if (!tbody) return;
        var pairs = 0, dollars = 0;
        tbody.querySelectorAll('tr').forEach(function (tr) {
          var p = tr.querySelector('.new-shoes-total-pairs');
          var t = tr.querySelector('.new-shoes-row-total');
          if (p) pairs += parseInt(p.textContent, 10) || 0;
          if (t) dollars += parseCurrencyText(t.textContent);
        });
        var el = document.querySelector('.new-shoes-family-total[data-tbody-id="' + pf.tbodyId + '"]');
        if (el) el.textContent = pairs + ' pr | ' + formatCurrency(dollars);
      });
    });
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
            if (t) brandDollars += parseCurrencyText(t.textContent);
          });
        }
      });
      totalPairs += brandPairs;
      totalDollars += brandDollars;
      var elP = document.getElementById(config.pairsId);
      var elT = document.getElementById(config.totalId);
      if (elP) elP.textContent = brandPairs;
      if (elT) elT.textContent = formatCurrency(brandDollars);
    });
    var elPairs = document.getElementById('new-shoes-pairs');
    var elTotal = document.getElementById('new-shoes-total');
    if (elPairs) elPairs.textContent = totalPairs;
    if (elTotal) elTotal.textContent = formatCurrency(totalDollars);
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
  }

    function setText(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  // ─── Init ───────────────────────────────────────────────────────────────
  renderNewShoes();
  renderExisting();
  renderCare();
  renderBelts();
  renderGloves();
  renderSlippers();
  })();
