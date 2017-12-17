import interact from 'interactjs'

const pixelSize = 16;

function _dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

function _onResize (event) {
    var target = event.target,
    x = (parseFloat(target.getAttribute('data-x')) || 0),
    y = (parseFloat(target.getAttribute('data-y')) || 0);

    // update the element's style
    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

function _onDrop (e) {
    console.log(e)
}

export function init() {
    console.log('Initalizing Interaction Manager...')
    interact('.draggable')
        .draggable({
            // enable inertial throwing
            inertia: true,
            // keep the element within the area of it's parent
            restrict: {
                restriction: "parent",
                endOnly: true,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            // enable autoScroll
            autoScroll: true,

            // call this function on every dragmove event
            onmove: _dragMoveListener,
            // call this function on every dragend event
            onend: (e) => _onDrop(e)
        })
        .resizable({
            // resize from all edges and corners
            edges: { left: false, right: true, bottom: true, top: false },
            // keep the edges inside the parent
            restrictEdges: {
              outer: 'parent',
              endOnly: true,
            },
            // minimum size
            restrictSize: {
              min: { width: 100, height: 50 },
            },
            inertia: true,
          })
          .on('resizemove', (e) => _onResize(e));
    // this is used later in the resizing and gesture demos
    window.dragMoveListener = _dragMoveListener;
}