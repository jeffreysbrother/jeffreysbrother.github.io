---
title: "Atom Snippet Customization"
---
The [Atom](https://atom.io/) text editor comes with a number of default snippets that are associated with (and activated by) [Emmet](http://emmet.io/)-like abbreviations. We can type an abbreviation, and then hit <code>TAB</code> to expand that abbreviation into a pre-defined snippet of code. This is particularly useful in eliminating repetition.

For example, if we type <code>html</code> and then press <code>TAB</code>, we'll get this:

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

  </body>
</html>
{% endhighlight %}

An added bonus is that after generating this bit of code, the cursor is placed conveniently between the opening and closing title tags. If the user hits <code>TAB</code> again, the cursor will jump to the body of the document. Every feature of this default action (the abbreviation, the content and formatting of the resulting snippet, and the result of hitting the <code>TAB</code> key) can be customized in the snippets.cson file.

To find this file, open Atom's preferences and select "Open Config Folder". In the file tree, open the snippets.cson file. Below the comments, if we type "snip" and then hit <code>TAB</code>, an example snippet will be generated for us:

{% highlight js %}
'.source.js':
  'Snippet Name':
    'prefix': 'Snippet Trigger'
    'body': 'Hello World!'
{% endhighlight %}

The first line specifies the language for which the snippet will be used (JavaScript in the above example). The next line serves as a human-readable name for the snippet. This, I think, exists only for documentation purposes; if we provide a relevant name for this task, our code will be more readable. The 'prefix' refers to the (ideally short) abbreviation, and 'body' refers to the snippet that will be generated upon pressing <code>TAB</code>. Here is an example of what the CSON block would look like if we were specifying the instructions for generating the HTML code in the first example above:

{% highlight js %}
'.text.html.basic':
  'HTML':
    'prefix': 'html'
    'body': '<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset="utf-8">\n\t\t<title>$1</title>\n\t</head>\n\t<body>\n\t\t$2\n\t</body>\n</html>'
{% endhighlight %}

Notice that in the 'body' section, in addition to the plain HTML, we also have escape sequences for newline characters and tabs. This is how we control the formatting of the snippet. We also see <code>$1</code> and <code>$2</code>. With these special characters, we can tell Atom where to insert the cursor with every subsequent press of the <code>TAB</code> key. <code>$1</code> is placed where we'd like the cursor to appear after we first generate the snippet. <code>$2</code> is placed where we'd like the cursor to move when we hit <code>TAB</code> a second time.
