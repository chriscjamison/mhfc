$(document).ready(
  function () {
    var menu_button_selector = "";
    // A String that will hold the  CSS selector for the HTML element containing 
    // the menu button for mobile devices is initialized.
    
    var menu_button_element = {};
    // An Object variable that will hold the jQuery object that references 
    // the menu button for mobile devices is initialized.

    menu_button_selector = "#mobile-nav-a-home";
    // The CSS selector that refers to the HTML element containing the menu button 
    // is passed on.

    menu_button_element = menu_button_selector;
    // The jQuery object that refers to the HTMl element containing the menu button 
    // is passed on.


    $(menu_button_element).click(
      function () {
        var menu_options_container_selector = "";
        // A String that will hold the CSS selector for the HTML element containing 
        // the list of links contained in the main menu for mobile devices 
        // is intialized.
        var ellipse_kente_selector = "";
        // A String that will hold the CSS selector for the HTML element containing 
        // the border with a kente pattern is initialized.
        var menu_button_icon_selector = "";
        // A String that will hold the CSS selector for the HTML element containing 
        // the icon used for the menu button is initialized.
        var body_selector = "";
        // A String that will hold the CSS selector for the HTML element, <body>, 
        // is initialized.

        var menu_options_container_element = {};
        // An Object that will hold the jQuery object that refers to the list 
        // of links contained in the main menu is initialized.
        var ellipse_kente_element = {};
        // An Object that will hold the jQuery object that refers to the border 
        // with a kente pattern is initialized.
        var menu_button_icon_element = {};
        // An Object that will hold the jQuery object that refers to the icon 
        // used for the main menu button is initialized.
        var body_element = {};
        // An Object that will hold the jQuery object that refers to the <body> 
        // is initialized.

        menu_options_container_selector = "#mobile-menu-options-div";
        // The CSS selector that refers to the HTML element referencing the 
        // list of links contained in the main menu is passed on.
        ellipse_kente_selector = "#ellipse-kente";
        // The CSS selector that refers to the HTML element referencing the 
        // border with a kente pattern is passed on.
        menu_button_icon_selector = "#mobile-nav-icon-img";
        // The CSS selector that refers to the HTML element referencing the 
        // icon used for the main menu is passed on.
        body_selector = "body";
        // The CSS selector that refers  to the HTML element, <body> is 
        // passed on.

        menu_options_container_element = menu_options_container_selector;
        // The jQuery object that refers to the HTML element containing 
        // the list of options contained in the main menu is passed on.
        ellipse_kente_element = ellipse_kente_selector;
        // The jQuery object that refers to the HTML element containing 
        // the border with a kente pattern is passed on.
        menu_button_icon_element = menu_button_icon_selector;
        // The jQuery object that refers to the HTML element containing 
        // the icon used for the main menu is passed on.
        body_element = body_selector;
        // The jQuery object that refers to the HTML element, <body>, 
        // is passed on.

        var ellipse_kente_shadow_selector = "";
        // A String that will hold the value of a CSS class that triggers 
        // a different drop shadow for the border with a kente pattern is initialized.
        var body_overflow_selector = "";
        // A String that will hold the value of a CSS class that triggers 
        // ability of the browser to scroll is initialized.

        var menu_button_icon_src_value = "";
        // A String that will hold the value of a link to the 'close' icon used 
        // for the main menu is initialized.

        var current_menu_button_icon_src_value = "";
        // A String that will hold the current value of the attribute 'href' for 
        // the icon used in the main menu is initialized.
       
        body_overflow_selector = "overflow-hidden-body";
        // A CSS class that will toggle the ability of the browser to scroll 
        // is passed on.
        ellipse_kente_shadow_selector = "menu-ellipse-kente-shadow";
        // A CSS class tht will toggle the visibilty of a darker shadow for 
        // the border with kente pattern is passed on.

        current_menu_button_icon_src_value = $(menu_button_icon_element).attr("src");
        // The value of the HTML attribute, 'src', for the HTML element, <img>, that refers 
        // to the icon used within the main menu is passed on.

        var current_menu_button_icon_index_value;
        // A Number variable that will hold the index value for the location 
        // of the string, 'menu.svg', is initialized.

        current_menu_button_icon_index_value = current_menu_button_icon_src_value.indexOf("menu.svg");
        // The index value for the location of the string, 'menu.svg', within the HTML element, 'src', 
        // used for the main menu icon is passed on.

        // IF/ELSE statement that toggles the menu icon used in the main menu to 
        // 'close' if the visitor is attempting to open the menu.
        if (current_menu_button_icon_index_value > -1) {
          menu_button_icon_src_value = "/assets/img/common/icons/close.svg";
        } else {
          menu_button_icon_src_value = "/assets/img/common/icons/menu.svg";
        }
        
        $(menu_options_container_element).slideToggle(400);
        $(ellipse_kente_element).toggleClass(ellipse_kente_shadow_selector);
        $(menu_button_icon_element).attr("src", menu_button_icon_src_value);
        $(body_element).toggleClass(body_overflow_selector);
      }
    );

    var button_resources_homepage_selector = "";
    // A String that will hold the CSS selector for the HTML element 
    // that contains the search button on the Resources homepage 
    // is initialized.

    var button_resources_homepage_element = {};
    // An Object that will hold the jQuery object that refers to the 
    // HTML element that contains the search button on the Resources 
    // homepage is initialized.

    button_resources_homepage_selector = "#questionnaire-resources-button-1";
    // The CSS selector for the HTML element that contains the search 
    // button on the Resources homepage is passed on.

    button_resources_homepage_element = $(button_resources_homepage_selector);
    // The jQuery object that refers to the button on the Resources homepage 
    // is passed on.

    $(button_resources_homepage_element).click(
      function () {
        window.alert("click");
        // window.location.href = "http://mhfcommunitites.org/resources-listing.htm";
      }
    );

    var search_details_mobile_selector = "";
    var search_details_desktop_selector = ""
    // String variables that will hold the CSS selectors for the HTML element that refers 
    // to the link that allows the visitor to enter new search details are initialized.

    var search_details_mobile_elements = {};
    var search_details_desktop_elements = {};
    // Object variables that will hold the jQuery objects that refers to the link that 
    // allows the visitor to enter new search details are intialized.
    
    search_details_mobile_selector = "#mobile-results-a-search_details, #mobile-results-a-img";
    search_details_desktop_selector = "#desktop-results-a-search_details, #desktop-results-a-img";
    // CSS selectors for the HTML element that contains the link that allows 
    // the visitor to enter new search details are passed on.

    search_details_mobile_elements = $(search_details_mobile_selector);
    search_details_desktop_elements = $(search_details_desktop_selector);
    // jQuery objects that refer to the HTML elements that contains the link 
    // that allows the visitor to enter new search details are passed on.

    $(search_details_mobile_elements).click(
      function () {
        displaySearchDetails("mobile");
      }
    );

    $(search_details_desktop_elements).click(
      function () {
        displaySearchDetails("desktop");
      }
    );
  }
);

function displaySearchDetails(form_type)  {
/*  @params

    FUNCTION - displaySearchDetails
    PURPOSE - To toggle the visibility of the Search Details form and the 
              search results on Resources and Directory search listing pages

  ----------------------------------------------------------------------------- */
 
  var search_details_div_selector = "";
  var search_results_listing_selector = "";
  // String variables that refer to the HTML elements that contain the content 
  // on the search results pages are initialized.

  var search_details_div_element = {};
  var search_results_listing_element = {};
  // Object variables that refer to jQuery objects that refer to the content 
  // on the search results pages are initialized.

  search_details_div_selector = "#" + form_type + "-results-search_details";
  search_results_listing_selector = "#" + form_type + "-results-listings";
  // CSS selectors that refer to the HTML elements that contain the content 
  // on the search results pages are initialized.
console.log("search_details_div_selector = " + search_details_div_selector);
  search_details_div_element = $(search_details_div_selector);
  search_results_listing_element = $(search_results_listing_selector);
  // jQuery objects that refer to the HTML elements that contain the content 
  // on the search results pages are passed on.

  var search_details_icon_selector = "";
  // A String variable that will hold the CSS selector that refers the HTML 
  // element containing the 'arrow' icon is initialized.

  var search_details_icon_element = {};
  // An Object that will hold the jQuery object that refers to the HTML 
  // element containing the 'arrow' icon is initialized.

  search_details_icon_selector = "#" + form_type + "-results-a-img img";
  // The CSS selector that refers to the HTML element containing the 'arrow' icon 
  // is passed on.

  search_details_icon_element = $(search_details_icon_selector);
  // The jQuery object that refers to the 'arrow' icon is passed on.

  var results_not_visible_class_value = "";
  // A String that refers to the CSS class name that toggles the visibility 
  // of the content on the search results pages is initialized.

  results_not_visible_class_value = "results-not_visible";
  // The CSS class name that will toggle the visibility of the content 
  // on the search results pages is passed on.

  var search_details_icon_up_src_value = "";
  var search_details_icon_down_src_value = "";
  // A String variable that will hold values for the attribute, 'src', 
  // for the 'arrow' icon are initialized.

  search_details_icon_up_src_value = "/wp-content/uploads/2020/08/hide_search_details.png";
  search_details_icon_down_src_value = "/wp-content/uploads/2020/08/search_details.png";
  // URL's that refer to image files that reflect the visibility of the search details 
  // form are passed on.

  var search_details_icon_current_src_value = "";
  // A String variable that will hold the current value of the attribute 'src' 
  // is initialized.

  search_details_icon_current_src_value = $(search_details_icon_element).attr("src");

  if (search_details_icon_current_src_value === search_details_icon_down_src_value) {
    $(search_details_icon_element).attr("src", search_details_icon_up_src_value)
  } else {
    $(search_details_icon_element).attr("src", search_details_icon_down_src_value);
  }
  
  if (form_type === "mobile") {
    $(search_details_div_element).toggleClass(results_not_visible_class_value);
    $(search_results_listing_element).toggleClass(results_not_visible_class_value);
    // The visibility of the content of the search results pages is toggled.
  } else {
    $(search_details_div_element).toggleClass(results_not_visible_class_value);
    // The visibility of the form that new search details can be entered 
    // is toggled.
  }
  
}