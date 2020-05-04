# jQuery r5-ScrollSpy
 
 A jQuery plugin, that keeps track of what elements currently are on the screen.
 
## Usage:
 
 1. Include `jquery.r5-scrollspy.js` *after* jQuery at the bottom of your document (before the `</body>`)
    ```html
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.slim.min.js"></script>
    <script src="/path/to/jquery.r5-scrollspy.js"></script>
    ```
    **Requirement:** jQuery version >=1.7.0 testet up to version 3.5.0-slim
    
 2. Add a collection to r5-ScrollSpy
    ```javascript
    (function($){
        $('.screen').scrollspy(options);
    })(jQuery);
    ```
    Where `.screen` is the class of all elements you want to track and `options` is a non mandatory 
    object that overwrites the default settings. 
    
    You can either embed this in a `<script></script>` tag directly into your HTML, or add this to 
    one of your javascript files.  
    
## Demo
  Open the [demo example](https://rock5gmbh.github.io/jquery.r5-scrollspy/) and see what you can do with r5-ScrollSpy.
  
  A stripped down version is included in the `examples/` folder. 
  
## Options
 r5-ScrollSpy comes with a few overwritable options:
 ### scrollElement
 **Default:** `window` - can be `Object` `window`, `document` or any `String` css selector.
 
 This is the element that gets scrolled.  
 
 ### activeClass
 **Default:** `onScreen` - can be any `String`.
 
 This class will be added to the element that is currently considered on screen.
 
 ### throttle
 **Default:** `250` - `Integer`
 
 Throttle the scroll trigger to only trigger every interval. 1000 = 1 second.
 
 Lower numbers increase the viewers CPU load but might make animations more smooth. 
 
 ### distanceBottomUnit
 **Default:** `fraction` - can be either `fraction`, `pixel` (short: `px`) or `percent` (short: `%`)
  
 Depending on the choosen *distanceBottomUnit* the distanceBottom will be calculated.
 
 * `fraction` means a partial/fraction of the screen. 
    
    e.g. the element is in the current viewport for 1/3 from the bottom
 * `pixel`|`px` means pixels from the bottom.
    
    e.g. the element is in the current viewport for 250 pixels from the bottom
 * `percent`|`%` means percent from the bottom.
 
    e.g. the element is in the current viewport for 10% from the bottom
 
 ### distanceBottom
 **Default:** `3` - `Integer`
 
 Describes the unit-less value of *distanceBottomUnit*
 
 Positive values mean, the element is at least that much scrolled in from the bottom to be considered on screen.
 
 Negative values mean, the element is at least maximum that much away (out of screen) the bottom to be considered on screen.
 
 `0` means, as soon as the element passes the bottom of the screen it is considered on screen
  
 ### addSideClasses
 **Default:** `false` - `Boolean`
 
 If true, elements that are scrolled in and out of the screen get a vlass with the in and out classes attached.
 
 Classes are: `in-top`, `in-bottom`, `out-top`, `out-bottom`
 
 ### inCallback
 **Default:** `function ($element, side) {return true;}` - `Function`
 
 In this callback you can add your own magic.
  
 First parameter `$element` references the jQuery element that is currently scrolled in.
  
 Second parameter`side` is the side where the element scrolled in from (either `bottom` or `top`).
 
 ### outCallback
 **Default:** `function ($element, side) {return true;}` - `Function`
  
  In this callback you can add your own magic.
   
  First parameter `$element` references the jQuery element that was marked as on screen last.
   
  Second parameter`side` is the side where the element scrolled out to (either `bottom` or `top`).
  
