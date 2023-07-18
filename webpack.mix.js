const tailwindcss = require('tailwindcss');
const mix = require('laravel-mix');

mix  
  .sass('./src/assets/scss/theme.scss', 'app/css')
  .sass('./src/assets/scss/footer.scss', 'app/css')
  .sass('./src/assets/scss/story-sec.scss', 'app/css')
  .sass('./src/assets/scss/from-the-people.scss', 'app/css')
  .sass('./src/assets/scss/about-us-banner.scss', 'app/css')
  .sass('./src/assets/scss/about-img-sec.scss', 'app/css')
  .sass('./src/assets/scss/image-txt-sec.scss', 'app/css')
  .sass('./src/assets/scss/about-product.scss', 'app/css')
  .sass('./src/assets/scss/meet-sec.scss', 'app/css')
  .sass('./src/assets/scss/faq-sec.scss', 'app/css')
  .sass('./src/assets/scss/contact-sec.scss', 'app/css')
  .sass('./src/assets/scss/get-in-touch.scss', 'app/css')
  .sass('./src/assets/scss/login-sec.scss', 'app/css')
  .sass('./src/assets/scss/refund-policy.scss', 'app/css')

  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],
  });
  