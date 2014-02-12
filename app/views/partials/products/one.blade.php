<div class="main-product">
    <div class="image">
        <img class="img-responsive" src="{{ $product->getImage('main')->getLargest() }}" alt=""/>
    </div>

    <div class="info">
        <div class="row">
            <div class="key">Model: </div>
            <div class="value">{{ $product->model }}</div>
        </div>
        <div class="clearfix"></div>
        <div class="row">
            <div class="key">Brand: </div>
            <div class="value"><a href="{{ URL::route('brand', $product->brand->id) }}">{{ $product->brand->name }}</a></div>
        </div>
        <div class="clearfix"></div>
        <div class="row">
            <div class="key">Gender: </div>
            <div class="value">{{ $product->gender }}</div>
        </div>
        <div class="clearfix"></div>
        <div class="row">
            <div class="key">Price: </div>
            <div class="value price">
<!--                <span class="before-price">QAR 700.00</span>-->
                <span class="actual-price">{{ $product->price }}</span>
            </div>
        </div>

        <div class="my-button add-to-cart-yellow"></div>
        <div class="my-button buy-now-blue"></div>

    </div>

</div>