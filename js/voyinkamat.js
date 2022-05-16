let salom = "Assalomu Aleykum!";
alert (salom + ' ' + 'Ro\'yxatdan o\'ting' +'!');
let firstName = prompt ('Ismingizni kiriting \'Passportdagi\'');
let lastName = prompt ('Familyangizni kiriting \'Passportdagi\'');
let birth = prompt ('tug\'ilgan sanagizni kiriting');
let presentYear = 2022;
let useryear = presentYear - birth;
alert ( firstName + '\n' + lastName + '\n' + useryear)

let boradi = 18
if (useryear >= boradi){
    alert('qo\'rqma birodar armiya yaqin');
} else if (useryear < boradi) {
    alert ('hali bor ekan');
}