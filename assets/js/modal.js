let JSONWorkContent = '{' +
                    '"1": {"pm_ProjectName": "KT-Apparel","pm_ProjectIntro": "Shopify Ecommerce Website","pm_ProjectDescription": "An eccommerce website powered by shopify with custom block and section for some custom designs and functions.","pm_ProjectImg": "assets/img/portfolio/11.png","pm_PoweredBy": "Shopify | Liquid | CSS | HTML | JavaScript","pm_LiveSite": "https://zn08aki33p74ix4g-69058396480.shopifypreview.com"},'+
                    '"2": {"pm_ProjectName": "Resto","pm_ProjectIntro": "PSD to Wordpress Website ","pm_ProjectDescription": "This is a PSD file (Photoshop file) converted to become a Wordpress site, I use the Elementor page builder and do some hardcoded designs using html,css and js on converting this webpage.","pm_ProjectImg": "assets/img/portfolio/22.png","pm_PoweredBy": "WordPress | CSS | HTML | JavaScript","pm_LiveSite": "http://krrt.infinityfreeapp.com/"},'+
                    '"3": {"pm_ProjectName": "Inka","pm_ProjectIntro": "Images to Website","pm_ProjectDescription": "Converted this Image file to a responsive website from the scratch using the bootstrap framework.","pm_ProjectImg": "assets/img/portfolio/33.png","pm_PoweredBy": "CSS | HTML | JavaScript | Bootstrap | Photoshop","pm_LiveSite": ""},'+
                    '"4": {"pm_ProjectName": "Food-Spot","pm_ProjectIntro": "Hubspot Website","pm_ProjectDescription": "A Hubspot sample webpage that I created during the Hubspot practicum exam , It is composed of custom modules and different content using its theme editor.","pm_ProjectImg": "assets/img/portfolio/44.png","pm_PoweredBy": "HubSpot | CSS | HTML | JavaScript","pm_LiveSite": "https://23689719.hs-sites.com/krrt_template"},'+
                    '"5": {"pm_ProjectName": "KT-Apparel 2","pm_ProjectIntro": "Wordpress Ecommerce website","pm_ProjectDescription": "This is an ecommerce website developed using the wordpress and woocommerce plugin. It have a list of products, variants and categories. Also, It supports a card and COD payment methods using Stripe Gateway plugin.","pm_ProjectImg": "assets/img/portfolio/55.png","pm_PoweredBy": "WordPress | WooCommerce | CSS | HTML | JavaScript","pm_LiveSite": "http://krrtshop.rf.gd/shop/"},'+
                    '"6": {"pm_ProjectName": "Portfolio V1","pm_ProjectIntro": "My Portfolio Version 1","pm_ProjectDescription": "I Designed and developed this Portfolio from the scratch. I Used different javascript plugins and custom CSS designs. In addition, I integrated some user interactions and animations.","pm_ProjectImg": "assets/img/portfolio/66.png","pm_PoweredBy": "CSS | HTML | JavaScript | Bootstrap | jQuery","pm_LiveSite": "http://krrt.rf.gd/"},'+
                    '"7": {"pm_ProjectName": "Portfolio V2","pm_ProjectIntro": "My Portfolio Version 2","pm_ProjectDescription": "Designed and developed this portfolio from the scratch","pm_ProjectImg": "assets/img/portfolio/77.png","pm_PoweredBy": "CSS | HTML | JavaScript | Bootstrap | jQuery","pm_LiveSite": "https://krezzar.github.io/"},'+
                    '"8": {"pm_ProjectName": "Webflow design","pm_ProjectIntro": "Webflow webpage design","pm_ProjectDescription": "Using Webflow I designed each section of this webpage using classes, components and interactions.","pm_ProjectImg": "assets/img/portfolio/88.png","pm_PoweredBy": "Webflow","pm_LiveSite": "https://krs-usource-site.webflow.io/"}'+
                    '}';
$( document ).ready(function() {
   $('.kr-about').addClass("kr-active");
    const WorkContent = JSON.parse(JSONWorkContent);
    console.log(WorkContent['1']['pm_ProjectName']);
     
     $('.portfolio-link').click(function(){
        var cuurentID = $(this).attr('id').substr(-1);
        console.log(cuurentID);
 
        $('#pm_ProjectName').html(WorkContent[cuurentID]['pm_ProjectName']);
        $('#pm_ProjectIntro').html(WorkContent[cuurentID]['pm_ProjectIntro']);
        $('#pm_ProjectDescription').html(WorkContent[cuurentID]['pm_ProjectDescription']);
        $('#pm_ProjectImg').attr('src',WorkContent[cuurentID]['pm_ProjectImg']);

        $('#pm_PoweredBy').html(WorkContent[cuurentID]['pm_PoweredBy']);
        $('#pm_LiveSite').html(WorkContent[cuurentID]['pm_LiveSite']);
        $('#pm_LiveSite').attr('href',WorkContent[cuurentID]['pm_LiveSite']);
 
        $('#portfolioModal').modal('show');
     });   
     $('.nav-link').click(function(){
      
         var RemoveFirstCharSub = $(this).attr('href').substring(1);
         console.log( RemoveFirstCharSub);
         $('.nav-link').removeClass("kr-active");
         $('.kr-'+RemoveFirstCharSub).addClass("kr-active");

     });   

     /*function testAnim(x) {$('#portfolioModalAnimation').attr('class', 'modal-dialog  animate__animated animate__' + x+' ');};
      $('#portfolioModal').on('show.bs.modal', function (e) {
           // testAnim('zoomInUp');
            console.log('open modal');
      })
      $('#portfolioModal').on('hide.bs.modal', function (e) {
            //testAnim('zoomOutDown');
            console.log('close modal');
      })*/
});
