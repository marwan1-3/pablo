function googleTranslateElementInit() {
  new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,ar',  // إضافة اللغة العربية إلى الخيارات
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

function translatePageToArabic() {
  var translateElement = new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,ar',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
  google.translate.TranslateElement.prototype.toggleClass = function() {
      var translateDiv = document.getElementById('google_translate_element');
      translateDiv.style.display = (translateDiv.style.display === 'none') ? 'block' : 'none';
  };
}