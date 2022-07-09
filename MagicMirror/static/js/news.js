var $ticker = $('[data-ticker="list"]'),
    tickerItem = '[data-ticker="item"]'
itemCount = $(tickerItem).length,
    viewportWidth = 0;

function setupViewport() {
    $ticker.find(tickerItem).clone().prependTo('[data-ticker="list"]');

    for (i = 0; i < itemCount; i++) {
        var itemWidth = $(tickerItem).eq(i).outerWidth();
        viewportWidth = viewportWidth + itemWidth;
    }

    $ticker.css('width', viewportWidth);
}

function animateTicker() {
    $ticker.animate({
        marginLeft: -viewportWidth
    }, 3000000, "linear", function () {
        $ticker.css('margin-left', '0');
        animateTicker();
    });
}var $ticker = $('[data-ticker="list"]'),
tickerItem = '[data-ticker="item"]'
itemCount = $(tickerItem).length,
viewportWidth = 0;

function setupViewport(){
$ticker.find(tickerItem).clone().prependTo('[data-ticker="list"]');

for (i = 0; i < itemCount; i ++){
    var itemWidth = $(tickerItem).eq(i).outerWidth();
    viewportWidth = viewportWidth + itemWidth;
}

$ticker.css('width', viewportWidth);
}

function animateTicker(){
$ticker.animate({
    marginLeft: -viewportWidth
  }, 400000, "linear", function() {
    $ticker.css('margin-left', '0');
    animateTicker();
  });
}

function initializeTicker(){
setupViewport();
animateTicker();

$ticker.on('mouseenter', function(){
    $(this).stop(true);
}).on('mouseout', function(){
    animateTicker();
});
}

initializeTicker();

function initializeTicker() {
    setupViewport();
    animateTicker();

    $ticker.on('mouseenter', function () {
        $(this).stop(true);
    }).on('mouseout', function () {
        animateTicker();
    });
}

initializeTicker();