<style>
    body {
        font-family: Cascadia Code, san-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
    }
    h2 {
        margin-top: 30px;
        margin-bottom: 20px;
    }
    h3 {
        margin-top: 30px;
        margin-bottom: 20px;
    }
    img {
        display: block;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>

# CSS Flexbox

Flexbox là phương pháp tạo bố cục linh hoạt (`flexible`) cho trang web theo 1 chiều (ngang hoặc dọc)

Flexbox giúp giải quyết được những khó khăn khi bố cục bằng các phương pháp cũ như `float` và `position`

-   Căn giữa phần tử theo chiều dọc của vùng chứa
-   Đặt kích thước linh hoạt cho các phần tử

## Tạo một bố cục flexbox

```html
<div class="container">
    <div></div>
    <p></p>
    <img />
</div>
```

```css
.container {
    display: flex;
}
```

Sử dụng `display: flex` trên một phần tử, sẽ chuyển đổi nó thành một vùng chứa linh hoạt (`flex container`) và các phần tử con trong nó là phần tử linh hoạt (`flex items`)

Lưu ý:

-   `display: flex` hoạt động như một phần tử khối
-   `display: inline-flex` hoạt động như một phần tử inline

## Mô hình flexbox

![](flex_terms.png)

## Flex container

-   Chiều sắp xếp: thuộc tính `flex-direction`

    -   `row`: sắp xếp phần tử theo chiều ngang (_mặc định_)
    -   `column`: sắp xếp phần tử theo chiều dọc
    -   `row-reverse`: sắp xếp theo chiều ngang, nhưng đảo ngược thứ tự của các phần tử con
    -   `column-reverse`: tương tự với `row-reverse`

-   Trục chính (main axis): thuộc tính `justify-content`

    -   `flex-start`: các phần tử con sẽ nằm về đầu trục chính (_mặc định_)
    -   `center`: căn giữa phần tử con theo trục chính
    -   `flex-end`: các phần tử con sẽ nằm về cuối của trục chính
    -   `space-between`: đặt khoảng trống bằng nhau _giữa_ các phần tử con
    -   `space-evenly`: đặt kích khoảng trống bằng nhau giữa các phần tử, _bao gồm cả 2 phía_
    -   `space-around`: đặt khoảng trống bằng nhau giữa các phần tử, bao gồm cả 2 phía, _nhưng 2 phía chỉ có kích thước một nửa so với ở giữa_

-   Trục vuông góc với trục chính (cross axis): thuộc tính `align-items`

    -   `stretch`: phần tử con chiếm toàn bộ kích thước vùng chứa (theo trục cross axis), từ cross start đến cross end (_mặc định_)
    -   `center`: phần tử con có kích thước (theo trục cross axis) linh hoạt (vừa đủ phần nội dung), và căn giữa theo trục cross axis
    -   `flex-start`: phần tử con có kích thước (theo trục cross axis) linh hoạt (vừa đủ phần nội dung), và nằm về vị trí cross start
    -   `flex-end`: tương tự `flex-start`, nhưng nằm về vị trí cross end
    -   `baseline`: tương tự như `inline`, căn theo _dòng nội dung_

-   Mặc định, tất cả các phần tử con sẽ được sắp xếp theo trục chính bất kể kích thước của nó có lớn hơn kích thước mà nó được phân bổ hay không. Để thay đổi hành vi này, sử dụng thuộc tính `flex-wrap`

    -   `no-wrap`: mặc định
    -   `wrap`: khi kích thước phần tử con vượt quá kích thước vùng chứa, nó sẽ được đẩy xuống một dòng mới

## Flex items

-   `flex` đặt kích thước tương đối so với phần tử khác
-   `align-seft` tự căn vị trí theo trục cross axis, ghi đè `align-items` của `flex container` và không ảnh hưởng đến phần tử khác
-   Không có `justify-seft` cho `flex items`
-   `order` thay đổi thứ tự sắp xếp của phần tử
