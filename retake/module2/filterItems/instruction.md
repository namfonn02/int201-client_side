## Filter Items Project
### Instructions:
- Prepare product data in ./data/product.js.
- **Write a function** called itemList(useritems) that constains one constant variable and three nested functions to filter for products. When the user inputss keywords, your items list must change dynamically according to user's keyword values.

    - **Constant Variable:**
        - items: Assign the parameter useritems to the initial list.

    - **Nested Functions:**
        - **initalPage():**
            > add the filteritemsHandler() function to `<input type="text" />` with event.Then calling the showitems() function to show list of all items as default when firstly loading page.
        - **filteritemsHandler():**
            > filtering an array of items that contains user's keywords with case insensitive. Then calling showltems() function by sending filtered array as parameter.
        - **showltems(_items)**
            > accepting array of items and show them dynamically. You must remove previous 's item list. Then creating `<li>`elements for each single item under `<ul id-"items"></ul>`. Each `<li>` element contains a text content `'ID:product id, NAME :productname, KEYWORDS:product keywords'`. for example, ***ID:GGOEAFKA087499, NAME: Android Small Removable Sticker Sheet',KEYWORDS: Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet,android small sticker sheets, Android Sheet***.

    - **Note that there is one white space after comma (,) between ID, NAME, and KEYWORDS.**
