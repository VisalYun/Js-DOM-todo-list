# DOM manipulation

## Basic Terminologies:
- DOM: Document Object Model
- Document: whole html document
- Node: each html element inside the document

## Select Element:
### getElementById('id')
Element with the matching id is selected. **Note**: id need to be unique
```
var ele = document.getElementById('id_name');
```
### getElementsByClassName('class')
Elements with the matching class name are selected. **Note**: It will return a HTMLCollection, not an array.
```
var lis = document.getElementByClassName('class_name');
```
### getElementsByTagName('tag')
Elements with the matching tag are selected. **Note**: It will return a HTMLCollection, not an array.
```
var lis = document.getElementByTagName('tag_name');
```
**Traverse through HTMLCollection**
```
var lis = document.getElementByTagName('tag_name');

Array.from(lis).forEach(Function(item){
    console.log(item);
})
```
### querySelector('CSS_Selector')
First Element that match the exactly specifies CSS selector is selector.
```
var ele = document.querySelector('#id_name .class_name tag_name')
```
### querySelectorAll('CSS_Selector')
All Elements that match the exactly specifies CSS selector are selector. **Note**: It will return a NodeList, not an array.
```
var lis = document.querySelectorAll('#id_name .class_name tag_name')
```

## Manipulate Element Content:
### element.textContent
Access to the text content of the particular element.
```
    var ele = document.getElementById('title');
    title.textContent = "Hello"; /* changing whole text content */
    title.textContent += " World!"; /* appending text content */
```
### element.innerHTML
Access to the whole inner elements that located inside the selected element.
```
    var ele = document.getElementById('container');
    title.innerHTML = "<h2>This is the power of InnerHTML</h2>"; /* changing whole innerHTML */
    title.innerHTML += "<p>InnerHTML</p>"; /* appending innerHTML */
```

## Node
### Various node property:
- **node.nodeType**: return node type. **Reference:**https://www.w3schools.com/jsref/prop_node_nodetype.asp
- **node.nodeName**: return tag name of the node.
- **node.hasChildNodes()**: check if the node have child element nested in it. Return True if the node has the child node.
- **node.parentNode**: return the parents node of the particular node
- **node.parentNode.removeChild(element_name)**: remove the element from the parent node
- **node.parentElement**: return the parents element of the particular node. *node.parentElement.parentElement* to access the topper level
- **node.children**: return the children node of the particular node.
- **node.nextSibling**: return the next node after the selected node.
- **node.nextElementSibling**: return the next element after the selected node.
- **node.previousSibling**: return the previous node before the selected node.
- **node.previousElementSibling**: return the previous element before the selected node.
### Cloning node
```
    const clonedNode = node.cloneNode(true);
    /* if 'false' is pass as an argument, nested child inside the node aren't copy to the cloned node. */
```

## Event
### Add an event to the selected node/element
```
    const item = document.querySelectorAll('#item');
    item.addEventListener('event_name', (e) => {
        console.log(e.target);
    });
```
event_name: https://www.w3schools.com/jsref/dom_obj_event.asp
e: Event object. Find out more on https://www.w3schools.com/jsref/obj_events.asp
### Event Bubbling
**Disadvantage of the above event**: if the new element is added during the runtime, it won't get any event listener. The concept of event bubbling is to add an event listener to the parent of the element that we want to interact with. Once we click its child the element the event will bubble up to its parent.
