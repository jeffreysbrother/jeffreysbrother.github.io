---
title: "Jekyll Syntax Highlighting"
---

{% highlight ruby %}
def foo
  puts 'foo'
end
{% endhighlight %}


{% highlight javascript %}
function test() {
  console.log("hello");
}
var james = "yellow";
var hannah = 14;
{% endhighlight %}


{% highlight php linenos%}
<?php
$variable = 13;
$jones = "anderson";
echo $jones;
?>
{% endhighlight %}

compare two languages

use "linenos" argument in one of them.

compare with embedding a Gist:

{% gist jeffreysbrother/c45d1a8bf9a40105377c %}
