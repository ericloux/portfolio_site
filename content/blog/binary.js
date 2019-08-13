function binary() {
    let content = "";

    content += `
    <h3>Binary Numbers</h3>

    As we've progressed upwards with our examination of what makes a computer, the scene has changed a bit. At first, we were examining circuits in 
    terms of on and off state. Once those were functioning correctly, then we could step back and think of them as operations rather than physical 
    constructs, doing logical operations with ones and zeroes. Then, we saw how to extend those operations and start to do addition and decision 
    making. However, that addition is limited to only add numbers up to three. Let's examine how we can extend that further!<br><br>

    If you remember, our adder outputs two binary numbers. Based on the combination of these numbers, we can have 0 through 3 represented as 00, 01, 
    10, and 11 respectively. So, if we add another digit, then we would double the combinations, and therefore double the numbers we could represent. 
    Each new digit represents a number that's a multiple of two. The rightmost place represents 1. The next digit to the left represents 2, then 4, 
    then 8, and so on. This is the basis for binary numbers. <br><br>

    It may not be intuitive, but we can add add and subtract these just like normal decimal numbers. The difference is that we carry or borrow with 
    twos instead of tens. For example, 111 + 1 would become 1000, or 1011 + 10 would be 1101. Converting these to decimal, we see that they're also 
    true: 7 + 1 = 8, and 11 + 2 = 13. <br><br>

    Of course, these are just for positive numbers. If we can represent negative numbers in a sensible way, then by adding them together, we can 
    perform subtraction with the same process of just adding bit by bit.<br><br>

    The first idea would be just to flip the bits. So, if 11 is 3, then 00 would be -3. You can tell the issue with that - 00 is already zero, and 
    that's kind of an important number. The solution would be to make each number a fixed number of digits long. For example, instead of representing 
    3 as 11, you might represent it as 0011. Then, if we reverse the bits, we get 1100 to represent -3. This means, though, that half of the numbers 
    would be negative, so any number that starts with 1 is negative, and any number starting with 0 is positive. But what happens if we add 1100 and 
    0011 together? We get 1111 when we should get zero. Of course, if we also flip 1111, then we get 0000, which is zero. So, somehow we ended up with 
    negative zero. This obviously makes no sense.<br><br>

    So, how can we fix this? If we add some other numbers and negatives, then we can see a pattern. Let's add -3 to each number and look at the 
    results:<br><br>

    <table>
        <thead>
            <tr>
                <th>Decimal</th>
                <th>Positive Binary</th>
                <th>-3 in Binary</th>
                <th>Binary Result</th>
                <th>Decimal Result</th>
                <th>Actual Value</th>
            </tr>
        </thead>
        <tr>
            <td>7</td>
            <td>0111</td>
            <td>1100</td>
            <td>0011</td>
            <td>3</td>
            <td>4</tr>
        <tr>
            <td>6</td>
            <td>0110</td>
            <td>1100</td>
            <td>0010</td>
            <td>2</td>
            <td>3</tr>
        <tr>
            <td>5</td>
            <td>0101</td>
            <td>1100</td>
            <td>0001</td>
            <td>1</td>
            <td>2</tr>
        <tr>
            <td>4</td>
            <td>0100</td>
            <td>1100</td>
            <td>0000</td>
            <td>0</td>
            <td>1</tr>
        <tr>
            <td>3</td>
            <td>0011</td>
            <td>1100</td>
            <td>1111</td>
            <td>-0</td>
            <td>0</tr>
        <tr>
            <td>2</td>
            <td>0010</td>
            <td>1100</td>
            <td>1110</td>
            <td>-1</td>
            <td>-1</tr>
        <tr>
            <td>1</td>
            <td>0001</td>
            <td>1100</td>
            <td>1101</td>
            <td>-2</td>
            <td>-2</tr>
        <tr>
            <td>0</td>
            <td>0000</td>
            <td>1100</td>
            <td>1100</td>
            <td>-3</td>
            <td>-3</td>
        </tr>
    </table><br>

    Each of the positive numbers is off by 1, and there's still that negative 0 in the mix. So, what if we add one to each negative number? That way 
    1111 would become -1 rather than -0, it would correct the error with the negative numbers. Recreating the chart above with this new method, we 
    get the following:<br><br>

    <table>
        <thead>
            <tr>
                <th>Decimal</th>
                <th>Positive Binary</th>
                <th>-3 in Binary</th>
                <th>Binary Result</th>
                <th>Decimal Result</th>
                <th>Actual Value</th>
            </tr>
        </thead>
        <tr>
            <td>7</td>
            <td>0111</td>
            <td>1101</td>
            <td>0100</td>
            <td>3</td>
            <td>4</tr>
        <tr>
            <td>6</td>
            <td>0110</td>
            <td>1101</td>
            <td>0011</td>
            <td>2</td>
            <td>3</tr>
        <tr>
            <td>5</td>
            <td>0101</td>
            <td>1101</td>
            <td>0010</td>
            <td>1</td>
            <td>2</tr>
        <tr>
            <td>4</td>
            <td>0100</td>
            <td>1101</td>
            <td>0001</td>
            <td>0</td>
            <td>1</tr>
        <tr>
            <td>3</td>
            <td>0011</td>
            <td>1101</td>
            <td>0000</td>
            <td>-0</td>
            <td>0</tr>
        <tr>
            <td>2</td>
            <td>0010</td>
            <td>1101</td>
            <td>1111</td>
            <td>-1</td>
            <td>-1</tr>
        <tr>
            <td>1</td>
            <td>0001</td>
            <td>1101</td>
            <td>1110</td>
            <td>-2</td>
            <td>-2</tr>
        <tr>
            <td>0</td>
            <td>0000</td>
            <td>1101</td>
            <td>1101</td>
            <td>-3</td>
            <td>-3</td>
        </tr>
    </table><br>

    It now works perfectly! We've just made numbers much easier to add in binary. Now instead of having two separate circuits to add and subtract, 
    all we need to do is to negate each bit in the number being subtracted and add one to it, then we can add the numbers and we have subtraction!<br><br>

    This method of representing binary numbers is also known as the "2's Complement" method. It's by far the most common way of representing negative 
    binary numbers due to the reasons presented here.<br><br><br><br>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {binary};