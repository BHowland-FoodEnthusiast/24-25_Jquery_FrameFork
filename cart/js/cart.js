

    function addProduct(){
        sessionStorage.setItem("Price", "414.99")
        updateTotal();
    }

    function updateTotal(){
        $("input#total").val(sessionStorage.getItem("Price"));
    }