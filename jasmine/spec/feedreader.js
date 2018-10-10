/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  "use strict";
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         //Check if the url property defined or empty
         it('url defined', function(){
           for(let feed of allFeeds){
             expect(feed.url).toBeDefined(undefined);
             expect(feed.url.length).not.toBe('');
           }
         });

        //Check if the name property defined or empty
         it('name defined', function(){
           for(let feed of allFeeds){
             expect(feed.name).toBeDefined(undefined);
             expect(feed.name.length).not.toBe('');
           }
         });
    });


    //The test suite for "The menu"
    describe('The menu', function() {

         //Check if the menu is hidden when the page loads
         it('is hidden', function() {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

          //Check the visibility of menu when it is clicked
          it('toggles on and off', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });

    // The test suite for "Initial Entries"
    describe('Initial Entries', function(){

         // Make sure that the feed is loaded and wait until work is done
         beforeEach(function(done){
           loadFeed(0, done);
         });

         // Chekc the completed work which contains content
         it('loads feed', function(){
           const container = document.querySelector('.feed .entry');
           expect(container.children.length > 0).toBe(true);
         });
    });

    // The test suite for "New Feed Selection"
    describe('New Feed Selection', function(){
        var firstFeed;

        // Check loaded feeds and compare the content that actually changes
         beforeEach(function(done) {
           loadFeed(0, function(){
             // Store the first feed's values
             firstFeed = $('.feed').html();
             // newer Feeds
             load(1, done);
           });

       });

       // Compare first feed against new feed content
       it('content changes', function() {
           Array.from(container.children).forEach( (content, index) => {
               expect(content.innerText === firstFeed[index]).toBe(false);
           });
       });
    });
}());
