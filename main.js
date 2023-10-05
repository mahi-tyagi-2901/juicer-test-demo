document.querySelector('.section-buyNow').style.display = 'none';
document.querySelector('.hypervisual__container #hypervisual__version-original>div:nth-child(2)').style.display = 'none';
const banner = document.createElement('div');
banner.setAttribute('class', 'add-banner');
banner.innerHTML = `
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .banner-content {
            background-image: url(https://mahityagi.com/img/image%202.png);
            background-repeat: no-repeat;
            background-position-x: right;
            background-color: #E1EFE6;
            padding: 37px 0px 0px 30px;
        }

        .banner-content h2 {
            color: #000;
            font-family: Lato;
            font-size: 36px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-bottom: 25px;
        }

        .banner-content h3 {
            color: #000;
            font-family: Lato;
            font-size: 27px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin-bottom: 25px;
        }

        .banner-content .why-us {
            text-align: center;
            display: flex;
            justify-content: flex-start;
            align-items: baseline;
            column-gap: 15px;
            padding: 0px 385px 20px 0px;
        }

        .banner-content .why-us .item p {
            color: #272828;
            text-align: center;
            font-family: Lato;
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
            line-height: 30px;
        }
    </style>

    <div class=banner-content>
        <h2>Why Choose Us?</h2>
        <h3>Here Are 5 Irresistible Reasons!</h3>
        <div class="why-us">
            <div class="item">
                <img src="https://mahityagi.com/img/noun-shipping-5295349%201.png">
                <p>Secure Shipping with Fedex</p>
            </div>
            <div class="item">
                <img src="https://mahityagi.com/img/noun-warranty-5204414%201.png">
                <p>3 Years
                    Warranty</p>
            </div>
            <div class="item">
                <img src="https://mahityagi.com/img/noun-customers-feedback-3988052 1.png">
                <p>10,000+
                    Happy Customers</p>
            </div>
            <div class="item">
                <img src="https://mahityagi.com/img/noun-canadian-flag-4062171 1.png">
                <p>Proudly
                    Canadian Owned</p>
            </div>
            <div class="item">
                <img src="https://mahityagi.com/img/noun-return-5729785 1.png">
                <p>30 Days Return Policy</p>
            </div>
        </div>
    </div>
`;
document.querySelector('.hypervisual__container #hypervisual__version-original>div:nth-child(1)').after(banner);

const product = document.createElement('div');
product.setAttribute('class', 'add-product');
product.innerHTML = `
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        .add-product {
        margin: 0px 50px 0px 50px;
        }

        .add-product h1 {
            color: #282727;
            text-align: center;
            font-family: Lato;
            font-size: 40px;
            font-weight: 700;
            margin: 35px;

        }

        .product-content {
            display: grid;
            grid-template-columns: calc(50% - 15px) calc(50% - 15px);
            justify-content: center;
            column-gap: 30px;
        }

        .product-content .product {
            border: 2px solid #EFEFEF;
            background: #F1F5F5;
            padding: 15px 20px;
        }

        .product-content .product .product-card {
            display: grid;
            grid-template-columns: calc(50% - 15px) calc(50% - 15px);
            column-gap: 30px;
            overflow: hidden;
            justify-content: center;
            padding: 20px;
        }

        .product-content .product .product-card .p-card {
            background: #FFF;
            box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
            display: grid;
    justify-content: center;
    align-items: end;
        }

        .product-content .product h2 {
            color: #282727;
            text-align: center;
            font-family: Lato;
            font-size: 27px;
            font-weight: 500;
        }

        .product-content .product .product-card .p-card .p-card-img {
            display: flex;
            justify-content: center;
        }


            .product-content .product .p-card h5 {
                color: #FF6D00;
                font-family: Lato;
                font-size: 16px;
                font-weight: 800;
                line-height: 22px;
                text-transform: uppercase;
                margin: 0px 0px 5px 10px;
            }

            .product-content .product .p-card .prod-price p {
                color: #333;
                font-family: Lato;
                font-size: 14px;
                font-weight: 700;
                line-height: 20px;
            }
            .product-content .product .p-card .prod-price p:nth-child(2)::after {
    width: 27%;
    height: 2px;
    content: '';
    display: block;
    background: gray;
    transform: rotate(350deg);
    position: absolute;
    top: 9px;
}

            .product-content .product .p-card .prod-price {
                display: flex;
                column-gap: 12px;
                margin: 0px 0px 8px 10px;
                    position: relative;
                ;
            }


            .product-content .product .p-card .prod-btn {
                border-radius: 2px;
                background: #090;
                text-align: center;
                padding: 4px;
            }

            .product-content .product .p-card .prod-btn button {
                background: none;
                border: none;
                color: white;
            }
    </style>

    <h1>Our Bestsellers</h1>
    <div class="product-content">
        <div class="product home">
            <h2>Best For Home Use</h2>
            <div class="product-card">
                <div class="p-card">
                    <div class="p-card-img">
                        <img src="https://mahityagi.com/img/Link%20%E2%86%92%20Medium_Black_FD_Left_Angle_500x.jpg.png">
                    </div>
                    <div class="prod-detail">
                    <h5>Home Freeze Dryer - MEDIUM</h5>
                    <div class="prod-price">
                        <p>$4,249.00</p>
                        <p>$4,995.00</p>
                    </div>
                    </div>
                    <div class="prod-btn">
                        <button>SEE MORE</button>
                    </div>
                </div>
                <div class="p-card">
                    <div class="p-card-img">
                        <img src="https://mahityagi.com/img/Link%20%E2%86%92%20Large_Black_FD_Left_Angle_500x.jpg.png">
                    </div>
                    <div class="prod-detail">
                    <h5>Home Freeze Dryer - Large</h5>
                    <div class="prod-price">
                        <p>$5,199.00</p>
                        <p>$5,995.00</p>
                    </div>
                    </div>
                    <div class="prod-btn">
                        <button>SEE MORE</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="product commercial">
            <h2>Best For Commercial Use</h2>
            <div class="product-card">
                <div class="p-card">
                    <div class="p-card-img">
                        <img src="https://mahityagi.com/img/image%203.png">
                    </div>
                    <div class="prod-detail">
                    <h5>Home Freeze Dryer - Medium stainless steel</h5>
                    <div class="prod-price">
                        <p>$4,599.00</p>
                        <p>$5,995.00</p>
                    </div>
                    </div>
                    <div class="prod-btn">
                        <button>SEE MORE</button>
                    </div>
                </div>
                <div class="p-card">
                    <div class="p-card-img">
                        <img src="https://mahityagi.com/img/image%204.png">
                    </div>
                    <div class="prod-detail">
                    <h5>Home Freeze Dryer - XL</h5>
                    <div class="prod-price">
                        <p>$6,999.00</p>
                        <p>$7,595.00</p>
                    </div>
                    </div>
                    <div class="prod-btn">
                        <button>SEE MORE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
banner.after(product);

const rangeCTA = document.createElement('div');
rangeCTA.setAttribute('class', 'add-range-cta');
rangeCTA.innerHTML = `
    <style>
        .add-range-cta {
        margin: 30px 0px;
       }
        .range-cta-button {
            border-radius: 4px;
            background: #090;
            text-align: center;
            width: fit-content;
            padding: 8px;
            margin: auto;
        }

        .range-cta-button button {
            color: #FFF;
            font-family: Lato;
            font-size: 20px;
            font-weight: 700;
            line-height: 28px;
            background: none;
            border: none;
        }
    </style>

    <div class="range-cta-button">
        <button>Or View Our FULL Range of Freeze Dryers Here</button>
    </div>
`;
product.after(rangeCTA);
const affirm = document.createElement('div');
affirm.setAttribute('class', 'add-affirm');
affirm.innerHTML = `
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        .affirm {
            display: grid;
            grid-template-columns: auto auto;
            border-radius: 7px;
            background: var(--Style-1, #E1EFE6);
            box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.10);
            margin: 10px 50px;
            padding: 10px 20px;
        }

        .affirm .affirm-text h3 {
            color: #090;
            font-family: Poppins;
            font-size: 26px;
            font-weight: 700;
            line-height: 30px;
            margin-bottom: 15px;
        }

        .affirm .affirm-text h4 {
            color: #000;
            font-family: Poppins;
            font-size: 18px;
            font-weight: 500;
            line-height: 26px;
            margin-bottom: 15px;
        }

        .affirm .affirm-text h4 span {
            color: #5A31F4;
            font-family: Poppins;
            font-size: 18px;
            font-weight: 600;
            line-height: 26px;
        }

        .affirm .affirm-text p {
            color: #000;
            font-family: Poppins;
            font-size: 19px;
            font-weight: 600;
            line-height: 30px;
            margin-bottom: 15px;
        }

        .affirm .affirm-text p span {
            color: #000;
            font-family: Poppins;
            font-size: 19px;
            font-weight: 700;
            line-height: 30px;
        }

        .affirm .affirm-logo {
            align-self: flex-end;
        }
    </style>


    <div class="affirm">
        <div class="affirm-text">
            <h3>Pay at your own pace</h3>
            <h4>With <span>Affirm</span>, you can choose from smarter payment options like 4 interest free payments or
                monthly payments</h4>
            <p>Just select <span>Affirm</span> at checkout</p>
        </div>
        <div class="affirm-logo">
            <img src="https://mahityagi.com/img/affirm.png">
        </div>
    </div>
`;
rangeCTA.after(affirm);
const text = document.createElement('div');
text.setAttribute('class', 'add-one-text');
text.innerHTML = `
    <style>
        .add-one-text {
        margin-top: 30px;
       }
        .one-text h1 {
            color: #282727;
            text-align: center;
            font-family: Lato;
            font-size: 40px;
            font-weight: 700;
            margin: auto;
        }
    </style>

    <div class="one-text">
        <h1>More than 10,000+ Happy Customers</h1>
    </div>
`;
affirm.after(text);
const reviews = document.createElement('div');
reviews.setAttribute('class', 'add-reviews');
reviews.innerHTML = `
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        .review-wrap {
            display: grid;
            grid-template-columns: calc(50% - 20px) calc(50% - 20px);
            column-gap: 40px;
            justify-content: center;
            align-items: center;
            margin: 20px 50px;
        }
        .review-wrap .reviews-content {
        position: relative;
        }
        .review-wrap .reviews-content:first-child img {
         position: absolute;
         transform: translate(50%, -56%);
         left: 268px;
        }
        .review-wrap .reviews-content:nth-child(2) img {
        position: absolute;
        transform: translate(50%, -57%);
        left: 259px;
        }

        .reviews-content .review-text {
            border-radius: 15px;
            border: 3px solid #090;
            padding: 12px;
        }

        .review-text h4 {
            color: #757575;
            font-family: Lato;
            font-size: 16.8px;
            font-weight: 400;
            line-height: 21px;
        }

        .review-text h4 span {
            color: #83BD31;
            font-family: Lato;
            font-size: 12.6px;
            font-style: italic;
            font-weight: 700;
            line-height: 21px;
            margin-bottom: 2px;
        }

        .review-text h5 {
            color: #F5DF5D;
            font-family: PingFang SC;
            font-size: 17.5px;
            font-weight: 400;
            line-height: 21px;
            margin-bottom: 10px;
        }

        .review-text h6 {
            color: #000;
            font-family: Lato;
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .review-text p {
            color: #000;
            font-family: Lato;
            font-size: 15px;
            font-weight: 400;
            line-height: 21px;
        }
    </style>

    <div class="review-wrap">
        <div class="reviews-content">
            <img src="https://mahityagi.com/img/Quote%20Left.png">
            <div class="review-text">
                <h4>Aaron Cherewyk <span> Verified customer</span></h4>
                <h5>★★★★★</h5>
                <h6>Awesome</h6>
                <p>Great Purchase love it Juicerville was very helpful with this ! Works great and hope for many years
                    of
                    use, I’ll buy my next one through them as well...</p>
            </div>
        </div>
        <div class="reviews-content">
            <img src="https://mahityagi.com/img/Quote%20Left.png">
            <div class="review-text">
                <h4>Yves Martel <span> Verified customer</span></h4>
                <h5>★★★★★</h5>
                <h6>Awesome Machine</h6>
                <p>So much production done with this. Quality built. Can’t complain.</p>
            </div>
        </div>
    </div>

`;
text.after(reviews);


