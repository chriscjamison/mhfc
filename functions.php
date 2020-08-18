<?php
  function mhfc_theme_support() {
    add_theme_support("title-tag");
    add_theme_support('custom-logo');
  }
  
  add_action("after_setup_theme", "mhfc_theme_support");

  function mhfc_register_styles() {
    $version = wp_get_theme()->get("Version");

    wp_enqueue_style("mhfc-style", get_template_directory_uri() . "/style.css", array("mhfc-bootstrap"), $version, "all");
    wp_enqueue_style("mhfc-bootstrap", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", array(), "4.5.0", "all");
    wp_enqueue_style("mhfc-typekit", "https://use.typekit.net/bug4xzc.css", array(), $version, "all");
  }

  add_action( "wp_enqueue_scripts", "mhfc_register_styles");

  function mhfc_register_scripts() {
    $version = wp_get_theme()->get("Version");

    wp_enqueue_script("mhfc-main", get_template_directory_uri() . "/assets/js/main.js", array("mhfc-jquery"), $version, true);
    wp_enqueue_script("mhfc-jquery", "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js", array(), "3.5.1", true);
    wp_enqueue_script("mhfc-jquery_ui", get_template_directory_uri() . "/static/assets/js/jquery-ui.js", array("mhfc-jquery"), $version, true);
    wp_enqueue_script("mhfc-popper", "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js", array(), "1.16.0", true);    
    wp_enqueue_script("mhfc-boostrap", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js", array("mhfc-popper"), "4.5.0", true);
  }

  add_action( "wp_enqueue_scripts", "mhfc_register_scripts");

  function mhfc_menus() {
    $locations = array(
      "primary" => "Top Main Navigation", 
      "mobile" => "Top Main Menu for mobile",
      "mobile_options" => "Menu options visible under Top Main Menu for mobile", 
      "footer" => "Footer Menu");

    register_nav_menus($locations);
  }

  add_action("init", "mhfc_menus");
?>