---
title: "JavaScript and Python"
---
In order to satisfy those pesky urges to compare superficial properties of things, I present an example of how JavaScript and Python differ, in terms of syntax, when it comes to declaring functions and variables and printing thingz to the console.

**JavaScript**:

```js
function big_boy() {
  var shampoo = "L'Oreal";
  console.log("Aw shit, is that " + shampoo + "?");
  if (shampoo[0] == "L") {
    console.log("Excellent");
  }
}
```

**Python**:

```python
def big_boy():
    shampoo = "L'Oreal"
    print("Aw shit, is that {} ?".format(shampoo))
    if shampoo[0] == "L":
        print("Excellent")
```

It's important to know that some individual could spend a good portion of his life articulating the differences between *x*, *y*, and *z* . . . only to find that, fifteen years later, he has no practical knowledge, no patience, no curiosity, and (therefore) no ability to solve problems.

But YAY. Keep "learning", bro.
