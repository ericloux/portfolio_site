function sql() {
    let content = "";

    content += `
    <h3>Database Management Systems Final Project</h3>

    For my Spring 2020 semester at MTSU, I took a course that focused on MySQL I had never worked with any type of SQL before, but I found the class 
    enjoyable and wanted to include my final project in my portfolio. As such, the following is a presentation of the requirements as well as the code 
    that I wrote in order to create a solution. I also got to write a new CSS class for my website so I could display code!
    <br><br>
    The project was to create a database that a community social club could use to track its members, activities, and payments. From there, we had to 
    write a number of queries that returned information pertinent to specific questions that were provided by the instructor. On top of that, the 
    entire design of the database was also part of the exercise. Although I created an ER diagram to demonstrate my database's structure, it's not 
    presented here. Obviously, designing the database was the first stem, and I did this by first browsing the given information provided by the 
    instructor as well as the requirements for what the queries had to return. Most of the information given either pertained to a 
    <span class="code-snippet">member</span> or an <span class="code-snippet">activity</span>. As such, those two had a table designed to hold 
    their information. In order to relate 
    the two to each other, I created a <span class="code-snippet">cardSwipe</span> class, meant to track a member's usage of a specific activity along 
    with other information such as when they accessed that activity. Finally, since the various activities had costs associated with them, I also 
    created a <span class="code-snippet">payment</span> table that was associated with each <span class="code-snippet">member</span> and tracked 
    whenever they made a payment, as well as the amount.
    <br><br>
    This is the initial part of my table. All it does is <span class="code-snippet">use</span> the appropriate database and ensure that any tables 
    are deleted before I start modifying them with the remainder of the code. Since I was student 16 in the class, the database I was assigned to was 
    "project_16". Following that are the drop statements for each of the tables to ensure that they haven't already been created:

    <div class="code-snippet">
    USE project_16;
    <br>
    <br>/* beginning create table and insert statements */
    <br>DROP TABLE IF EXISTS members;
    <br>DROP TABLE IF EXISTS payments;
    <br>DROP TABLE IF EXISTS cardSwipes;
    <br>DROP TABLE IF EXISTS activities;
    </div><br>
    With that done, I can provide an analysis of each table I created. The first is the <span class="code-snippet">member</span> table, which naturally 
    tracked information related to the club's members. First, I gave each a unique ID. Since the project said this was a "small Tennessee town" I 
    figured it would be unlikely for the club to have more than ten thousand members, so I put that as the cap. I used an integer ID so it could 
    automatically increment each time a record was added to the table, and identified it as the primary key for the table. After that, I added 
    their full name, birth date, phone number, and the date that they joined the club. Many of these fields were required to answer the necessary 
    questions in the queries section.
    <div class="code-snippet">
    <br>CREATE TABLE members (
    <br>&emsp; id int(4) NOT NULL AUTO_INCREMENT,
    <br>&emsp; lastName varchar(20) NOT NULL,
    <br>&emsp; firstName varchar(20) NOT NULL,
    <br>&emsp; birthDate date NOT NULL,
	<br>&emsp; joinDate date NOT NULL,
    <br>&emsp; phoneNumber char(10) NOT NULL,
	<br>&emsp; PRIMARY KEY (id)
    <br>);
    </div><br>
    Next was a table to track each <span class="code-snippet">payment</span> made toward each account. This is strictly to calculate money going in to the club, as the dues and fees 
    were calculated elsewhere. The payments table is fairly self explanatory, with each record having a transaction id (another automatically 
    incrementing field that functions as a primary key), a foreign key linking the transaction to the member who made the payment, and then details 
    about the transaction in the form of the amount and payment date.
    <div class="code-snippet">
    <br>CREATE TABLE payments (
	<br>&emsp; transaction int(6) NOT NULL AUTO_INCREMENT,
    <br>&emsp; member int(4) NOT NULL,
    <br>&emsp; amount float(6,2) NOT NULL,
    <br>&emsp; paymentDate datetime NOT NULL,
    <br>&emsp; PRIMARY KEY (transaction)
    <br>);
    </div><br>
    The <span class="code-snippet">cardSwipe</span> table serves as a link between the <span class="code-snippet">member</span> table and the 
    yet-undiscussed <span class="code-snippet">activities</span> table, showing when a certain member swiped their card to indulge in a specific 
    activity. I used another automatically-incrementing integer field as the primary key, but this table had two foreign keys: one to the 
    <span class="code-snippet">member</span> table and one to the <span class="code-snippet">activities</span> table. It also tracked the date 
    and time that the member used the activity.
    <div class="code-snippet">
    <br>CREATE TABLE cardSwipes (
	<br>&emsp; transaction int(6) NOT NULL AUTO_INCREMENT,
    <br>&emsp; swipeDate dateTime NOT NULL,
	<br>&emsp; activity char(3) NOT NULL,
    <br>&emsp; member int(4) NOT NULL,
	<br>&emsp; PRIMARY KEY (transaction)
    <br>);
    </div><br>
    Lastly, the <span class="code-snippet">activities</span> table was a list of all amenities that the club charged for. Instead of an integer, 
    the primary key here was simply a three-character identifier in order to make it easier to reference. A description of the activity and its 
    cost (which in many cases was zero) are also included. Since this table doesn't reference any others, there are no foreign keys.
    <div class="code-snippet">
    <br>CREATE TABLE activities (
    <br>&emsp; id char(3) NOT NULL,
    <br>&emsp; description char(40) NOT NULL,
	<br>&emsp; cost float(4,2) NOT NULL,
    <br>&emsp; PRIMARY KEY (id)
    <br>);
    </div><br>
    Next, I got to put in my dummy data. I did a combination of random generation from websites as well as writing lines that would be specifically 
    targeted in the queries section.
    <div class="code-snippet">
    <br>INSERT INTO members (lastName, firstName, birthDate, joinDate, phoneNumber)
    <br>VALUES 	('Peterson', 'Ian', '1966-08-12', '2020-01-01', '6158457205'),
    <br>&emsp; ('Garrett', 'Cedric', '1969-11-04', '2020-01-15', '4238453458'),
    <br>&emsp; ('Underwood', 'Katherine', '1944-06-11', '2020-01-29', '6159458094'),
    <br>&emsp; ('Brady', 'Gertrude', '1943-11-10', '2020-02-12', '4239458034'),
    <br>&emsp; ('Dean', 'Kay', '2007-07-31', '2020-02-26', '6158954938'),
	<br>&emsp; ('Watson', 'Forrest', '2007-10-26', '2020-03-11', '4239845094'),
	<br>&emsp; ('Curtis', 'Tom', '2003-06-12', '2020-03-25', '6159404839'),
	<br>&emsp; ('Gibbs', 'Jessica', '1991-06-03', '2020-04-08', '4239485039'),
	<br>&emsp; ('Robinson', 'Janie', '1996-05-04', '2020-04-22', '6159498594'),
	<br>&emsp; ('Hansen', 'Orville', '1994-04-24', '2020-05-05', '4235049294');
    <br>
    <br>INSERT INTO payments (member, amount, paymentDate)
    <br>VALUES	(1, 200.00, '2020-01-01 14:00:00'),
	<br>&emsp; (2, 150.00, '2020-01-15 15:00:00'),
	<br>&emsp; (3, 80.00, '2020-01-29 16:00:00'),
	<br>&emsp; (4, 120.00, '2020-02-12 17:00:00'),
	<br>&emsp; (5, 200.00, '2020-02-26 18:00:00'),
	<br>&emsp; (6, 20.00, '2020-03-11 19:00:00'),
	<br>&emsp; (7, 30.00, '2020-03-25 20:00:00'),
	<br>&emsp; (8, 40.00, '2020-04-08 21:00:00'),
	<br>&emsp; (9, 60.00, '2020-04-25 22:00:00'),
	<br>&emsp; (3, 200.00, '2020-04-25 23:00:00');
    <br>
    <br>INSERT INTO cardSwipes (swipeDate, activity, member)
    <br>VALUES	('2020-04-12 14:00:00', 'BSW', 8),
	<br>&emsp; ('2020-04-13 15:00:00', 'CRM', 6),
	<br>&emsp; ('2020-03-06 16:00:00', 'BBE', 2),
	<br>&emsp; ('2020-02-27 17:00:00', 'TCT', 7),
	<br>&emsp; ('2020-02-27 18:00:00', 'TCT', 9),
	<br>&emsp; ('2020-01-18 19:00:00', 'WRM', 2),
	<br>&emsp; ('2020-03-26 20:00:00', 'CWL', 10),
	<br>&emsp; ('2020-01-31 21:00:00', 'TRM', 1),
	<br>&emsp; ('2020-02-01 22:00:00', 'BSA', 5),
	<br>&emsp; ('2020-04-01 23:00:00', 'SCT', 4),
	<br>&emsp; ('2020-03-01 13:00:00', 'BSA', 2);
    <br>
    <br>INSERT INTO activities (id, description, cost)
    <br>VALUES	('BSW', 'Buy sandwich', 4.00),
	<br>&emsp; ('BSA', 'Buy salad', 2.50),
	<br>&emsp; ('BBE', 'Buy beer', 1.50),
	<br>&emsp; ('WRM', 'Weight room', 0),
	<br>&emsp; ('CRM', 'Computer room', 0),
	<br>&emsp; ('TRM', 'TV room', 0),
	<br>&emsp; ('BCT', 'Basketball court', 0),
	<br>&emsp; ('TCT', 'Tennis court', 0),
	<br>&emsp; ('SCT', 'Shuffleboard court', 0),
	<br>&emsp; ('CWL', 'Climbing wall', 0);
    </div><br>
    With the structure of the database and the dummy data in place, the next part of the project involved writing a number of queries that would 
    meet the criteria given by the instructor. These varied from mundane to incredibly involved.
    <br><br>
    The first was to simply query each member's full name and join date. This was easily taken from the <span class="code-snippet">member</span> 
    table.
    <div class="code-snippet">
    <br>-- 1. All member names and their join date
    <br>SELECT firstName, lastName, joinDate FROM members;
    </div><br>
    Next, each of the participants could be grouped into one of three groups based on their age. Those 18 and under are "youths", 19-64 year olds 
    are "adults", and those 65 and older are "seniors". These were the requirements given, as I want to be clear it wasn't an error on my part that 
    18 year olds are considered "youth" or that 18-21 year olds are considered "adults" and therefore can buy alcohol. Regardless, this was also 
    fairly simple to solve, as it just required making a separate case for each age group and then counting the number of members that fit into 
    that case.
    <div class="code-snippet">
    <br>-- 2. Count of members in each age group
    <br>SELECT 
	<br>&emsp; COUNT(CASE WHEN year(curdate())-year(birthDate) < 19 THEN 1 END) AS 'Youth',
	<br>&emsp; COUNT(CASE WHEN year(curDate())-year(birthDate) BETWEEN 19 AND 65 THEN 1 END) AS 'Adult',
    <br>&emsp; COUNT(CASE WHEN year(curDate())-year(birthDate) >= 65 THEN 1 END) AS 'Senior' 
    <br>FROM members;
    </div><br>
    Next was the dues calculation. Since we had no guidance on what the club's dues were, I made and listed some assumptions. (Naturally, I ensured 
    these assumptions would make it easy to solve the problem!) Namely, I assumed that each member paid $20 in dues every calendar month, due on the 
    first day of membership and in every calendar month thereafter. In order to figure the total dues for a specific month, 
    the number of members who had joined 
    before that month were counted, then multiplied by 20. One of the other asssumptions is that no one would ever leave the club, as their leave date 
    is not in the <span class="code-snippet">member</span> table. I wanted to point that out since it wouldn't be realistic in an actual database, but 
    worked in the constraints of this project.
    <div class="code-snippet">
    <br>-- 3. Total amount from dues in March 2020 
    <br>SELECT 20*COUNT(*) AS 'Monthly Dues' FROM members WHERE joinDate < '2020-04-01';
    </div><br>
    Now we start getting into the fun queries where we get to make use of all the keys! This query needed to return the names and age of all of 
    the members who used the climbing wall. The names and age are both in the <span class="code-snippet">member</span> table, and the 
    <span class="code-snippet">cardSwipe</span> table tracks who used a certain piece of equipment, so this was just a simple inner join to bring 
    those two pieces of information together.
    <div class="code-snippet">
    <br>-- 4. Names and age of all members who have used the climbing wall
    <br>SELECT 	CONCAT(firstName, ' ', lastName) AS 'Name', 
	<br>&emsp; year(curdate())-year(birthDate) AS 'Age'
    <br>FROM members
    <br>INNER JOIN cardSwipes
	<br>&emsp; ON members.id = cardSwipes.member
    <br>WHERE cardSwipes.activity = 'CWL';
    </div><br>
    This next question was very similar to the last, but instead of tracking who used a piece of equipment, the query instead needed to return all 
    members who used any equipment between 6 and 8 PM. In addition, it needed to return the name of the activity. The member information and time of 
    access is all almost identical to the last query. However, there's an additional join performed to link the <span class="code-snippet">cardSwipe
    </span> and the <span class="code-snippet">activities</span> tables so that information can be retrieved as well.
    <div class="code-snippet">
    <br>-- 5. Name, age, and activity of all members who used the club between 6pm and 8pm
    <br>SELECT CONCAT(firstName, ' ', lastName) AS 'Name',
	<br>&emsp; year(curdate())-year(birthDate) AS 'Age',
	<br>&emsp; description AS 'Activity'
    <br>FROM members
    <br>INNER JOIN cardSwipes
	<br>&emsp; ON members.id = cardSwipes.member
    <br>INNER JOIN activities
	<br>&emsp; ON cardSwipes.activity = activities.id
    <br>WHERE HOUR(swipeDate) BETWEEN 18 AND 20;
    </div><br>
    The next query was to see who was allowed into the bar. This was done by simply subtracting the birthdate of the member from the current date, 
    then ensuring it wasn't under 18. (Remember, based on the project guidelines, anyone who is considered an "adult" can use the bar.)
    <div class="code-snippet">
    <br>-- 6. List of all members not allowed into the bar
    <br>SELECT * 
    <br>FROM members
    <br>WHERE year(curdate()) - year(birthDate) < 19;
    </div><br>
    The final question was another easy one to ensure that we understood the use of wildcard characters. All that we needed to do was pull a list of 
    all of the member's phone numbers that started with the 423 area code.
    <div class="code-snippet">
    <br>-- 7. List of all phone numbers starting with 423
    <br>SELECT *
    <br>FROM members
    <br>WHERE phoneNumber LIKE '423%';
    </div><br>
    Although the exercises were fun, I had a burning personal question that I wanted to solve. Most of the queries that were asked for are all fun 
    academic exercises, but what about getting some practical use out of the table? So, I challenged myself to write a query that would display the 
    account balance of each member. This was challenging, but fun! First, I had to find the various dues, fees, and payments associated with each 
    member, then combine them into a sum column that showed their total balance, whether it was positive or negative.
    <br><br>
    First, I wrote the three queries that would return each of the information I needed. The dues fees were calculated with the same assumptions I 
    used to answer question #3. I simply subtracted the month of the join date from the current date, added that to 12x the number of years between 
    the join date and current date, then multiplied it all by 20. 
    <br><br>
    Next, I calculated the fees for things such as buying a sandwich or a beer. For each cardSwipe, I got the cost of the associated activity, then 
    summed them all based on the member ID. Again, this wasn't terribly hard.
    <br><br>
    Lastly, I got the payment information. This was similar to the fees, only I didn't need to make use of any foreign keys as the member and payment 
    info were both in the <span class="code-snippet">payments</span> table.
    <br><br>
    Once I had all this information, I needed to combine it. Unfortunately that was beyond the scope of the class, so I had to do my own research. It 
    ended up not being too terribly difficult, as I could make each of the three queries into their own table, and then join the tables together. It 
    required information from all four tables to be joined. I also chose to use the dues table in all of the outer joins that I performed, as it had 
    a line for every member regardless of whether they had any fees or payments. Finally, I combined the information from each of the three tables 
    into a "Balance" column that sumply subtracted the fees and dues from the payments. I also combined that with the first and last name of each 
    member just for easier reference. After all that work, I had a useful statement that was capable of telling all user's balances.
    <div class="code-snippet">
    <br>-- Extra: Account balance of all members
    <br>SELECT 
    <br>&emsp; dues.id, 
    <br>&emsp; members.firstName,
    <br>&emsp; members.lastName,
    <br>&emsp; COALESCE(fees.Fees, 0) AS 'Fees', 
    <br>&emsp; dues.Dues AS 'Dues', 
    <br>&emsp; COALESCE(payments.Payments, 0) AS 'Payments',
    <br>&emsp; COALESCE(Payments, 0) - COALESCE(Fees, 0) - Dues AS 'Balance'
    <br>FROM 
    <br>&emsp; (SELECT 
    <br>&emsp; &emsp; member, 
    <br>&emsp; &emsp; SUM(cost) AS 'Fees'
    <br>&emsp; FROM cardSwipes
    <br>&emsp; INNER JOIN activities
    <br>&emsp; &emsp; ON cardSwipes.activity = activities.id
    <br>&emsp; GROUP BY cardSwipes.member) fees
    <br>RIGHT JOIN
    <br>&emsp; (SELECT 
    <br>&emsp; &emsp; id, 
    <br>&emsp; &emsp; 20*(12*(YEAR(curdate())-YEAR(joinDate))+(MONTH(curdate())-MONTH(joinDate)+1)) AS 'Dues' 
    <br>&emsp; FROM members) dues
    <br>&emsp; ON (fees.member = dues.id)
    <br>LEFT JOIN
    <br>&emsp; (SELECT
    <br>&emsp; &emsp; member,
    <br>&emsp; &emsp; SUM(amount) AS 'Payments'
    <br>&emsp; FROM payments
    <br>&emsp; GROUP BY member) payments
    <br>&emsp; ON (dues.id = payments.member)
    <br>LEFT JOIN members
    <br>&emsp; ON (members.id = dues.id);
    </div><br>
    All in all, I really enjoyed the class and this project. Although I put the most effort into the bonus question that I wrote for myself, I feel 
    like it was really enjoyable to design and implement my own database from the ground up and had fun solving each of the questions.
    <br><br><br><br>
    `;

    document.getElementsByClassName("content")[0].innerHTML = content;
}

export {sql};