<!DOCTYPE html>
<html>
  <head>
    <?php 
      wp_head();
    ?>
   
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>

<!-- HEADER INCLUDING NAVIGATION -->
    <header>

<!-- DESKTOP MAIN NAVIGATION -->
      <nav class="visible-desktop-flex" id="top-desktop-nav">
        <a href="/" title="Home"><?php 
                                    if (function_exists('the_custom_logo')) {
                                      the_custom_logo();
                                    }
                                  ?></a>
        <?php 
          wp_nav_menu(
            array(
              "menu" => "primary", 
              "container" => "", 
              "theme_location" => "primary", 
              'items_wrap' => '<ul id="nav-ul">%3$s</ul>'
            )
          );
        ?>
      </nav>

<!-- MOBILE MAIN NAVIGATION -->
      <nav class="visible-mobile col-12" id="top-mobile-nav">
        <?php 
          wp_nav_menu(
            array(
              "menu" => "primary", 
              "container" => "", 
              "theme_location" => "mobile", 
              'items_wrap' => '<ul id="nav-ul">%3$s</ul>'
            )
          );
        ?>
      </nav>
      
      <img src="<?php echo get_template_directory_uri(); ?>/assets/img/common/logo/logo.png" alt="Mental Health Friendly Communities" class="visible-mobile" id="nav-logo-mobile">
   
      <?php if ( get_the_title() == "" ) : ?>
              
<!-- HEADER BACKGROUND -->
      <div id="header-ellipses">
        <div class="ellipse_shape" id="ellipse-white">&nbsp;</div>
        <div class="ellipse_shape" id="ellipse-kente">&nbsp;</div>
        <div class="ellipse_shape" id="ellipse-dark_green">&nbsp;</div>
      </div>
    </header>
    <?php else: ?>
      <!-- HEADING -->
      <?php the_title('<h1 class="carousel-h1">', '</h1>'); ?>

<!-- HEADER BACKGROUND -->
      <div id="header-ellipses">
        <div class="ellipse_shape" id="ellipse-white">&nbsp;</div>
        <div class="ellipse_shape" id="ellipse-kente">&nbsp;</div>
        <div class="ellipse_shape" id="ellipse-dark_green">&nbsp;</div>
        <div class="ellipse_shape visible-desktop" id="ellipse-blue">&nbsp;</div>
      </div>
    </header>
    <?php endif; ?>
<!-- MOBILE MENU OPTIONS -->
    <div class="visible-mobile-menu" id="mobile-menu-options-div">
      <div id="mobile-menu-options-container-div">
        <?php 
          wp_nav_menu(
            array(
              "menu" => "primary", 
              "container" => "", 
              "theme_location" => "mobile_options", 
              'items_wrap' => '<ul id="mobile-menu-nav-ul">%3$s</ul>'
            )
          );
        ?>
        <span class="menu-footer-span" id="menu-footer-copyright">Mental Health Friendly Communities &copy; 2020</span> 
      </div>
    </div>
    