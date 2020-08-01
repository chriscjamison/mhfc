
<!-- FOOTER -->
<footer class="visible-desktop">
      <div id="footer-background-div">
        <div class="container" id="footer-container-div">
          <div class="col-9" id="footer-column-left-div">
            <a href="/" title="Home"><?php 
                                    if (function_exists('the_custom_logo')) {
                                      the_custom_logo();
                                    }
                                  ?></a>
            <div id="footer-contact_info-div">
              <div class="footer-contact_info-listing-div" id="contact_info-listing-phone_number">
                <span class="contact_info-listing-title-span">Phone Number:</span>
                <span class="contact_info-listing-info-span">(510) 790-9092</span>
              </div>
              <div class="footer-contact_info-listing-div" id="contact_info-listing-email">
                <span class="contact_info-listing-title-span">Email Address:</span>
                <a href="mailto:mhfc@tricities.com" class="contact_info-listing-info-a">mhfc@tricities.com</a>
              </div>
              <span id="footer-copyright-span">Mental Health Friendly Communities &copy; 2020</span>
            </div>
          </div>
          <div class="col-3" id="footer-links-div">
          <?php 
            wp_nav_menu(
              array(
                "menu" => "footer", 
                "container" => "", 
                "theme_location" => "footer", 
                'items_wrap' => '<ul id="footer-links-ul">%3$s</ul>'
              )
            );
          ?>
            <!-- <ul id="footer-links-ul">
              <li>
                <a href="/" title="Home" class="footer-links-a" id="footer-link-home">Home</a>
              </li>
              <li>
                <a href="/about-us.htm" title="About Us" class="footer-links-a" id="footer-link-about_us">About Us</a>
              </li>
              <li>
                <a href="/directory.htm" title="Directory" class="footer-links-a" id="footer-link-directory">Directory</a>
              </li>
              <li>
                <a href="/resources.htm" title="Resources" class="footer-links-a" id="footer-link-resources">Resources</a>
              </li>
              <li>
                <a href="/contact-us.htm" title="Contact Us" class="footer-links-a" id="footer-link-contact_us">Contact Us</a>
              </li>
            </ul> -->
          </div>
        </div>
      </div>

<!-- ELLIPSES BORDERS -->
      <div class="visible-desktop" id="footer-ellipses">
        <div class="ellipse_shape" id="ellipse-blue">&nbsp;</div>
        <div class="ellipse_shape" id="ellipse-dark_green">&nbsp;</div>
      </div>
    </footer>

    <?php 
      wp_footer();
    ?>
  </body>
</html>