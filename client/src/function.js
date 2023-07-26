import { PRODUCTS } from "./product";

export const CouponDiscount = (totalAmount,vouchers) => {
    var total = 0;
    const { coupon } = vouchers;
    var coupondisCount =0;

    // console.log(coupon)

        //Coupon Campaigns
        if ( totalAmount !== 0 && coupon === "FixedAmount") {
            coupondisCount = totalAmount - total;
            coupondisCount = 50;
            // console.log(coupondisCount);

            return coupondisCount;   

        } else if ( totalAmount !== 0 && coupon === "PercentageDiscount") {

            // Percentage discount
            coupondisCount = ((10/100) * totalAmount/100);
            return coupondisCount;  
        } else {
            return coupondisCount;   
        }
}

export const OnTopDiscount = (totalAmount,vouchers,cartItems) => {
    const { onTop } = vouchers;
    const point = 68;
    var onTopdisCount =0;
    var inCartItem = [];
    var inCartCount = [];
        
        //On Top Campaigns
        if ( totalAmount !== 0 && onTop === "PercentageDiscountByItemCategory") {

            for (const keyCart in cartItems) {
                if (cartItems[keyCart] !== 0) {
                    inCartItem.push(keyCart)
                    inCartCount.push(cartItems[keyCart])
              }
            }

            const inCart = inCartItem.reduce((accumulator, key, index) => {
                return {...accumulator, [key]: inCartCount[index]};
              }, {});
        
            for (const item in inCart) {
                if (item !== 0) {
                    var itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                    if (itemInfo.category === "Clothing"){
                        onTopdisCount += (15/100 * itemInfo.price) * cartItems[item] /100;
                    // console.log(onTopdisCount,"Discount");
                    } else {
                        console.log('No Discount !!');
                    }
                }  
            }
                return onTopdisCount;   
        } else if (  totalAmount !== 0 && onTop === "DiscountByPoint") {
            // Discount by point
            if (point <= ((20/100) * totalAmount/100)){
            onTopdisCount = point;
            // console.log(onTopdisCount);

            return onTopdisCount;   
            }
        }else{
            return onTopdisCount;
        }
}

export const SeasonalDiscount = (totalAmount,vouchers) => {
    const { seasonal } = vouchers;
    // console.log(seasonal)
    var seasonaldisCount = 0;

        //seasonal Campaigns
        if (seasonal === "SpecialCampaigns") {
            //Special campaigns
            for (let i = 300; i <= totalAmount/100;) {
            seasonaldisCount += 40;
            i += 300
            }
            // console.log(seasonaldisCount);
            return seasonaldisCount;
        } else {
            return seasonaldisCount;
        }
}
