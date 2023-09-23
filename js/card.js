let totalPrice = 0;
function selectItem(target) {
    const itemName = target.childNodes[3].childNodes[5].innerText;
    const itemDetailsShow = document.getElementById('item-details-show');
    const count = itemDetailsShow.childElementCount;
    const p = document.createElement('p');
    p.classList.add('font-medium');
    p.classList.add('text-xl');
    p.innerHTML = `${count + 1}. ${itemName}`;
    itemDetailsShow.appendChild(p);
    // get item price
    const itemPriceText = target.childNodes[3].childNodes[7].childNodes[0].innerText;
    const itemPrice = parseFloat(itemPriceText);
    // calculation total item price
    totalPrice = parseFloat(totalPrice) + parseFloat(itemPrice);
    const totalPriceFixed = totalPrice.toFixed(2);
    // set total item price
    document.getElementById('total-price').innerText = totalPriceFixed;
    // make purchase button disable attribute remove
    const btnMakePurchase = document.getElementById('btn-make-purchase');
    if (totalPrice > 0) {
        btnMakePurchase.removeAttribute('disabled');
    } else {
        btnMakePurchase.setAttribute('disabled', true);
    }
    // set total tk to pay
    let totalTkPay = totalPrice;
    let totalTkPayFixed = totalTkPay.toFixed(2);
    document.getElementById('total-tk').innerText = totalTkPayFixed;
    // get discount value apply coupon code 
    const couponCodeText = document.getElementById('btn-coupon');
    const buttonApply = document.getElementById('btn-coupon-apply');
    // check SELL200 and remove disabled attribute
    couponCodeText.addEventListener('keyup', function () {
        const couponCodeTextValue = couponCodeText.value;
        if (couponCodeTextValue === 'SELL200' && totalPrice >= 200) {
            buttonApply.removeAttribute('disabled');
        }
        else {
            buttonApply.setAttribute('disabled', true);
        }
    })
    // get value from apply button
    buttonApply.addEventListener('click', function () {
        const couponCodeTextValue = couponCodeText.value;
        // calculation discount
        if (couponCodeTextValue !== undefined) {
            // discount price
            const discountTk = totalPrice * 0.2;
            const discountTKFixed = discountTk.toFixed(2);
            // set discount price
            document.getElementById('discount-price').innerText = discountTKFixed;
            // calculation Total tk
            totalTkPay = totalPrice - discountTk;
            totalTkPayFixed = totalTkPay.toFixed(2);
            document.getElementById('total-tk').innerText = totalTkPayFixed;
        }
    })
}



