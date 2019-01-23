<?php
    $dir = __DIR__;
    $scanResult= scandir($dir);
    $filenames = array_diff($scanResult, array('.', '..', 'bundle.js'));
?>




window.env = {
    GIT_COMMIT: '',
    CLIENT_ID: [''],
    AUTH_TOKEN: '',
    PARTNER: '',
    FILENAMES: ''
};

window.env.FILENAMES = <?php
foreach($filenames as $name) {
    echo( $name . "," );
}
?>

window.env.CLIENT_ID  = window.env.FILENAMES.split(",");

// What's left is to find all the strings with the substring provided by user.
// This function should be done in js and in Test.js file (only for now).


// outputing 5 strings to test.
console.info('env: ', window.env.CLIENT_ID[0]);
console.info('env: ', window.env.CLIENT_ID[1]);
console.info('env: ', window.env.CLIENT_ID[2]);
console.info('env: ', window.env.CLIENT_ID[3]);
console.info('env: ', window.env.CLIENT_ID[4]);
