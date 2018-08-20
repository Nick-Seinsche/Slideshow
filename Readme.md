# Slideshow:

### 1. About
___
Slideshow allows you to create simple jet very clean
presentations only using html. The only thing you need is a text editor and a browser to open the presentation.
In the following it will be explained how to create the presentation layout.

### 2. Layout:
___
    <head>
        [title,fonts]
    </head>
    ...
    .. (Body) [your presentation]
    .
    <footer>
        [script],[author]
    </footer>
The layout of a Slideshow html file can be divided into three sections, the head, body and the footer.

The head is used to define the title of your presentation as well as using custom fonts or adding other js or css files.

The body contains all the different slides of your presentation.

The footer contains the Slideshow script which will turn the html file into the final clean presentation.

### 3. Elements:
___
**The following list contains the main elements that you can use to design your presentaion. Each Element will have its on section in this file, in which you will be explained how to use/implement the specific element into your presentaion**
1. Title
2. Slide
3. Heading
4. Plain text
5. Cite
6. Image
7. List
8. Video
9. Annotations
10. Notes
11. Author
12. Math equations
13. __The Slideshow Script__

#### __*i. Title*__
The title of you presention is specified in the head tag. It will be the name of the Browser-Table
```
<head>
    <title>My Title</title>
    ...
</head>
```

#### __*ii. Slide*__
The slide tag is put between the head and footer section
```
...
<slide>
    ...
<slide>
<slide>
    ...
<slide>
...
```

#### __*iii. Heading*__
The heading is the title of your slide
```
<slide>
    <heading>my title</heading>
    ...
<slide>
```

#### __*iv. Plain text*__
Plain Text
```
<slide>
    <text>my text</text>
    ...
<slide>
```

###### __*Attributes*__:
```
    <text class="fontTiny">Smallest Text</text>
    <text class="fontSmall">Smaller Text</text>
    <text class="fontLarge">Larger Text</text>
    <text class="selectable">Allows to highlight the text</text>
```

#### __*v. Cite*__:
Use Cites inside the text tags
```
<slide>
    ...
    <text>
        ...
        <cite>The Cite</cite>
        ...
    </text>
    ...
<slide>
```

#### __*vi. Image*__
The Image element adds an image from the internet to your slide to specify the image add a 'src' tag and set it to the desired link
```
<slide>
    <image src="link_to_the_image"/>
    ...
<slide>
```

###### __*Attributes*__:
```
    <image class="image selectable">Allows to highlight the image</image>
```

#### __*vii. List*__
There are two types of lists. The dot list and the number list. The dotlist has dots infront of the list items and the number list has numbers infront of the list items
*Dotlist:*
```
<slide>
    ...
    <dotlist>
        <listitem>Item 1</listitem>
        <listitem>Item 2</listitem>
        <listitem>Item 3</listitem>
    </dotlist>
    ...
<slide>
```
*Numberlist:*
```
<slide>
    ...
    <numberlist>
        <listitem>Item 1</listitem>
        <listitem>Item 2</listitem>
        <listitem>Item 3</listitem>
    </numberlist>
    ...
<slide>
```

###### __*Attributes*__:
```
    <[number/dot]list class="no_enumeration">A list without numbers or dots infront of the list items</[number/dot]list>
```

#### __*viii. Video*__
The video tag embeds a youtube video into the specified slide
```
<slide>
    ...
    <video src="youtube_embed_link"></video>
    ...
<slide>
```
Notice that the youtube embed link is not the normal link to the video!

#### __*ix. Annotations*__
Annotations can be placed into text tags and appear so: This is a annotation<sup>1</sup>
```
<slide>
    ...
    <text>This demonstrates<annotation>1</annotation> an annotation</text>
    ...
</slide>
```

#### __*x. Notes*__
Notes are used to explain annotation at the bottom of the slide. ideally place them at the end of the slide
```
<slide>
    ...
    <note>1: This notes explains an annotation</note>
</slide>
```

#### __*xi. Author*__
The author tag shows the name of the creator of the slideshow and it is location at the bottom left of the slides. The author tag is put into the footer tag
```
<footer>
    <author>Donald Trump</author>
</footer>
```

#### __*xii. Math Equations*__
Slideshow uses Mathjax to display math equations.
For more informations visit [mathjax.org.](https://www.mathjax.org/)
*inline equation*:
```
<slide>
    <text>
        $$ax^2+bx+c=\sqrt{5}$$
    </text>
</slide>
```
'$$' marks the start and end of a math equation

#### __*xiii. The Slideshow Script*__
```
<footer>
    <script type="text/javascript" src="https://drive.google.com/uc?export=download&id=1_YjS0CjAx5gpBDDhwR-iKw66gXLBTxNj" build="true" maths="true"></script>
</footer>
```

### Other Attributes:
___

Line one<br>Line two - ```Line one<br>Line two```

<b>Bold text</b> - ```<b>Bold text</b>```

<strong>Important text</strong> - ```<strong>Important text</strong>```

<i>Italic text</i> - ```<i>Italic text</i>```

<em>Emphasized text</em> - ```<em>Emphasized text</em>```

<mark>Marked text</mark> - ```<mark>Marked text</mark>```

<small>Small text</small> - ```<small>Small text</small>```

<del>Deleted text</del> - ```<del>Deleted text</del>```

<ins>Inserted text</ins> - ```<ins>Inserted text</ins>```

Script<sub>Subscript text</sub> - ```Script<sub>Subscript text</sub>```


### 5. Example:
___

```
<head>
    <title>My Title</title>
</head>

<slide>
    <heading>First Heading</heading>
    <image src="https://ak6.picdn.net/shutterstock/videos/6631529/thumb/1.jpg"/>
</slide>

<slide>
    <heading>SomeTitle</heading>
    <text>
        Preset Text
        $$ax^2+bx+c=\sqrt{3}$$
    </text>
</slide>

<slide>
    <heading>Table of Contents</heading>
    <dotlist class="no_enumeration">
        <listitem>General</listitem>
        <listitem>General2</listitem>
        <listitem>Specific</listitem>
        <listitem>Specific2</listitem>
    </dotlist>
</slide>

<slide>
    <heading>Heading3</heading>
    <text>This is a text</text>
</slide>

<footer>
    <author>Donald Duck</author>
    <script type = "text/javascript" src = "script.js" build="true" maths="false"></script>
</footer>    
```
