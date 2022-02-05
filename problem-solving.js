// ASSIGNMET-PROBLEM SOLVING --1
/*
Q-একটা ফাংশন এ প্যারামিটার হিসেবে নিবে আনা (ana)। তারপর সেটাকে ভরি তে কনভার্ট করে কত মান হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে। 
*/
function anaToVori(ana) {
    if (typeof ana == "number") {
        return ana / 16;
    }

    return "Please Enter a valid number";
}
console.log(anaToVori(64));


// ASSIGNMENT-PROBLEM SOLVING --2
/*
 Q--তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 
১ টি সিঙ্গারা এর দাম – ৭ টাকা
১ টি সমুচা এর দাম – ১০ টাকা 
১ টি জিলাপি এর দাম – ১৫ টাকা 
এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 
 */
function pandaCost(samusa, banana, mango) {
    let samusaCost = samusa * 7;
    let bananaCost = banana * 10;
    let mangoCost = mango * 15;
    if (typeof samusa == 'number' && typeof banana == 'number' && typeof mango == 'number') {
        let totalCost = samusaCost + bananaCost + mangoCost;
        return totalCost;
    }
    return "plase Enter your valid number";
}
const Quantity = pandaCost(5, 2, 3);
console.log(Quantity);


// ASSIGNMENT-PROBLEM SOLVING --3
/*
প্যারামিটার হিসাবে নিবে কয়জন পিকিনিক এ যাবে সেই সংখ্যা। 

যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে। 

যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে। 

আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যতজন আছে তাদের প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে। এর ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে।  

এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে। 
*/
function picnicBudget(people) {
    if (typeof people == "number") {
        if (people > 0 && people <= 100) {
            return people * 5000;
        } else if (people > 100 && people <= 200) {
            return 100 * 5000 + (people - 100) * 4000;
        } else if (people > 200) {
            return 100 * 5000 + 100 * 4000 + (people - 200) * 3000;
        } else {
            return "Please Enter a Positive number";
        }
    }
    return "Please Enter a valid number";
}
console.log(picnicBudget(300));

// ASSIGNMENT-PROBLEM SOLVING --4
function oddFriend(friends) {
    if (Array.isArray(friends)) {
        for (let friend of friends) {
            if (friend.length % 2) {
                return friend;
            }
        }
    }
    return "Please Enter Your Valid Number";
}
let allFriend = ['zulfikar', 'islam', 'rafi', 'maisha', 'shahed', 'selim'];
console.log(oddFriend(allFriend));

