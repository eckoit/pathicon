pathicon
=========

A Pathicon is simply an icon described by a svg path. See [Raphael Icons](http://raphaeljs.com/icons/) as an example.

Here is an example path:

    M2.379,14.729 5.208,11.899 12.958,19.648 25.877,6.733 28.707,9.561 12.958,25.308z

This describes a [checkmark](http://raphaeljs.com/icons/#check). Place the above in a file called img/checkmark.path

Adding to a page
----------------

Add a div, or an i tag, eg:

    <i id="checkmark-icon" />

and then bind an icon to it using requirejs

    define(["pathicon!img/checkmark?id=checkmark-icon,width=64,height=64,fill=#ccc"], function(icon){})

at this point you will have a 64x64 icon rendered filled #ccc! Simple.

Want to do more? the icon variable is a raphael element that can be manipulated. Eg.

    icon.glow()


Installing
----------

you will need [jam](http://jamjs.org)

    jam install pathicon



Small!
------

The whole point of pathicons is they are small, and that when you opimize with requirejs, they are minified and included in the optimized file.
This can allow you to have only one .js file to hold all your js and your icons! __Sweet__.


Where Can I Get Paths?
----------------------

We are working on a svg->path tool, but in the meantime, you can do mostly by had pretty easy. Here are some good places for vector icons:

  - [Raphael Icons](http://raphaeljs.com/icons)
  - [The Noun Project](http://thenounproject.com/)
  - [IcoMoon](https://github.com/Keyamoon/IcoMoon--limited-/tree/master/Icons/SVG)

Is this better than Font Icons?
-------------------------------

I am not sure. Time will tell. Font icons seem like a workaround, and a lot of work to create!

