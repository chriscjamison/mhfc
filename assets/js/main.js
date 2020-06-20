$(document).ready(
  function () {
    var $menu_button_selector = "";
    // A String that will hold the  CSS selector for the HTML element containing 
    // the menu button for mobile devices is initialized.
    
    var $menu_button_element = {};
    // An Object variable that will hold the jQuery object that references 
    // the menu button for mobile devices is initialized.

    $menu_button_selector = "#mobile-nav-a-home";
    // The CSS selector that refers to the HTML element containing the menu button 
    // is passed on.

    $menu_button_element = $menu_button_selector;
    // The jQuery element that refers to the HTMl element containing the menu button 
    // is passed on.


    $($menu_button_element).click(
      function () {
        var $menu_options_container_selector = "";
        // A String that will hold the CSS selector for the HTML element containing 
        // the list of links contained in the main menu for mobile devices 
        // is intialized.
        var $ellipse_kente_selector = "";
        // A String that will hold the CSS selector for the HTML element containing 
        // the border with a kente pattern is initialized.

        var $menu_options_container_element = {};
        // An Object that will hold the jQuery object that refers to the list 
        // of links contained in the main menu is initialized.
        var $ellipse_kente_element = {};
        // An Object that will hold the jQuery object that refers to the border 
        // with a kente pattern is initialized.

        $menu_options_container_selector = "#mobile-menu-options-div";
        // The CSS selector that refers to the HTML element referencing the 
        // list of links contained in the main menu is passed on.
        $ellipse_kente_selector = "#ellipse-kente";
        // The CSS selector that refers to the HTML element referencing the 
        // border with a kente pattern is passed on.

        $menu_options_container_element = $menu_options_container_selector;
        // The jQuery element that refers to the HTML element containing 
        // the list of options contained in the main menu is passed on.
        $ellipse_kente_element = $ellipse_kente_selector;
        // The jQuery element that refers to the HTML element containing 
        // the border with a kente pattern is passed on.

        var $menu_options_container_visible_selector = "";
        // A String that will hold the value of a CSS class that triggers the 
        // visiblity of the list of options contained in the main menu 
        // is initialized.
        var $ellipse_kente_shadow_selector = "";
        // A String that will hold the value of a CSS class that triggers 
        // a different drop shadow for the border with a kente pattern is initialized.

       
        $menu_options_container_visible_selector = "menu-visible";
        $ellipse_kente_shadow_selector = "menu-ellipse-kente-shadow";

        
        $($menu_options_container_element).toggleClass($menu_options_container_visible_selector);
        $($ellipse_kente_element).toggleClass($ellipse_kente_shadow_selector);
      }
    );
  }
);