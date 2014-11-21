var app = angular.module('localPair1');

app.controller('homeController', function ($scope) {
  // $scope.myInterval = 5000;
  // var slides = $scope.slides = [];
  // $scope.addSlide = function() {
  //   var newWidth = 600 + slides.length;
  //   
  // };
  // for (var i=0; i<4; i++) {
  //   $scope.addSlide();
  // }
  
  $scope.myInterval = 4000;
  $scope.slides = [
    {
      image: 'http://www.okm.sd23.bc.ca/ProgramsServices/academics/PublishingImages/academics.png',
      text: 'Get help with your Academics'
    },
    {
      image: 'http://www.rcshield.com/wp-content/uploads/2013/02/url-2.jpeg',
      text: 'Learn a new Sport or get better at one'
    },
    {
      image: 'http://3.bp.blogspot.com/-KiXBBW7TtFk/UNQuZ9Uh3aI/AAAAAAAAAck/Uwo2R9D3DL8/s1600/languages.png',
      text: 'Stuck building your site? Get help in one of these Tech languages'
    },
    {
      image: 'http://vixstar1314.files.wordpress.com/2011/05/music_note_art.jpg',
      text: 'Learn to play a new instrument or get help in getting better'
    }
    ];
     
});