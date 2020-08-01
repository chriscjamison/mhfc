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
        <div class="menu-option-category-div" id="option-category-directory">
          <a href="/directory.htm" title="Directory" class="menu-option-a" id="menu-option-directory">Directory</a>
          <div class="menu-option-subcategory-div" id="option-subcategory-directory">
            <a href="/partners.htm" title="MHFC Community Partners" class="menu-suboption-a" id="menu-suboption-partners">MHFC Community Partners</a>
            <a href="/mhfc-congregations.htm" title="MHFC Congregations" class="menu-suboption-a" id="menu-suboption-congregations">MHFC Congregations</a>
            <a href="/agencies.htm" title="Alameda County Behavior Agencies" class="menu-suboption-a" id="menu-suboption-agencies">Alameda County Behavior Agencies</a>
          </div>
        </div>
        <div class="menu-option-category-div" id="option-category-resources">
          <a href="/resources.htm" title="Resources" class="menu-option-a" id="menu-option-resources">Resources</a>
          <div class="menu-option-subcategory-div" id="option-subcategory-resources">
            <a href="/suicide-hotlines.htm" title="Suicide hotlines and prevention" class="menu-suboption-a" id="menu-suboption-hotlines">Suicide hotlines and prevention</a>
            <a href="/brochure.htm" title="MHFC Downloadable Brochure" class="menu-suboption-a" id="menu-suboption-brochure">MHFC Downloadable Brochure</a>
          </div>
        </div>
        <a href="/contact-us.htm" title="Contact Us" class="menu-option-a" id="menu-option-contact_us">Contact Us</a>
        <div class="menu-option-category-div" id="option-category-about_us">
          <a href="/about-us.htm" title="About Us" class="menu-option-a" id="menu-option-about_us">About Us</a>
          <div class="menu-option-subcategory-div" id="option-subcategory-resources">
            <a href="/purpose-statement.htm" title="Purpose Statement" class="menu-suboption-a" id="menu-suboption-purpose">Purpose Statement</a>
            <a href="/training.htm" title="Training Team" class="menu-suboption-a" id="menu-suboption-training">Training Team</a>
          </div>
        </div>
        <span class="menu-footer-span" id="menu-footer-copyright">Mental Health Friendly Communities &copy; 2020</span>  
      </div>
    </div>
    