$(document).ready(function() {
    // 1. 文字色を変更する
    $('#change-color').click(function() {
        $('#target').css('color', 'blue'); // 任意の色（例: 青色）に変更
    });

    // 2. 文字内容を変更する
    $('#change-text').click(function() {
        $('#target').text('こんにちは、世界！'); // 任意のテキストに変更
    });

    // 3. フェードアウトで文字を消す
    $('#fade-out').click(function() {
        $('#target').fadeOut();
    });

    // 4. フェードインで文字を現す
    $('#fade-in').click(function() {
        $('#target').fadeIn();
    });
});
