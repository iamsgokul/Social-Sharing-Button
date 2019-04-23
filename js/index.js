        $(document).ready(function () {
            $('.socialshare > a').click(function () {
                $(this).toggleClass('rotate');
                $('.socialshare ul').toggleClass('active');
            })
        })