
# what is this?
Simple package for digit staff.
 1. Convert English digit to Bangla.
 2. Formate digit like 103k , 1.2m.
 3. Convert English date & time to bangla.

## Usage
import { digitBn, digitFormat, digitDateEnToBn, digitTimeEnToBn, dateEnToBn, dateTimeEnToBn } from 'play-with-digit'

### Methods
 1. digitBn (digit)
 2. digitFormate (digit)
 3. digitDateEnToBn(date)
 4. digitTimeEnToBn(date)
 5. dateEnToBn(date)
 6. dateTimeEnToBn(date)

### Example
 - let en = digitBn(34)
 ```
 console.log(en)
 ==> ৩৪
 ```
 ---
  - let like = digitFormat(234567)
 ```
 console.log(like)
 ==> 234.6K
 ```
  ---
   - let date = new Date()
   - let dateBn = digitDateEnToBn(date)
 ```
 console.log(date)
 ==>Sat Jan 02 2021 10:55:11 GMT+0600 (Bangladesh Standard Time)
 console.log(dateBn)
 ==> ২/১/২০২১
 ```
 ---
   - let date = new Date()
   - let timeBn = digitTimeEnToBn(date)
 ```
 console.log(timeBn)
 ==> ১০:৫৫:১১ AM GMT +৬
 ```
 ---
   - let date = new Date()
   - let dateBn =  dateEnToBn(date)
 ```
 console.log(dateBn)
 ==> শনিবার, ২ জানুয়ারী, ২০২১
 ```
---
   - let date = new Date()
   - let dateTimeBn =  dateTimeEnToBn(date)
 ```
 console.log(dateTimeBn)
 ==> শনিবার, ২ জানুয়ারী, ২০২১ ১০:৫৫:১১ AM GMT +৬
 ```
  
