<?php
    // set $dir to current folder, where env.js is. This is more flexible.
    $dir = __DIR__;
    $scanResult= scandir($dir);
    $filenames = array_diff($scanResult, array('.', '..', 'bundle.js'));
?>

window.env = {
    GIT_COMMIT: '',
    CLIENT_ID: '',
    AUTH_TOKEN: '',
    PARTNER: '',
    FILENAMES: '',
    NAMEARRAY: ['']
};

// combine all elements in $filenames into a long string. Each homegraph name is separated by comma.
window.env.FILENAMES = <?php

// declaring a string var named tmp
$tmp = "";

// returned value is not a string, how to solve this?
foreach($filenames as $name) {
    $tmp = $tmp . $name . ",";
}
// return $tmp as a string, now it works. PHP return the content of a value to javascript instead of the string itself.
echo "'" . $tmp . "'";
?>

window.env.NAMEARRAY  = window.env.FILENAMES.split(",");

// What's left is to find all the strings with the substring provided by user.
// This function should be done in js and in Test.js file (only for now).


// outputing 5 strings to test.

console.info('env: ', window.env.CLIENT_ID);
console.log('env: ', window.env.NAMEARRAY[2]);
console.log('env: ', window.env.NAMEARRAY[0]);
