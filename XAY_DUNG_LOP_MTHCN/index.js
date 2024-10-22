
    class Rectanglea{
    constructor(width, height) {
    // Kiểm tra giá trị hợp lệ
    this.setWidth(width);
    this.setHeight(height);
}

    // Getters
    getWidth() {
    return this.width;
}

    getHeight() {
    return this.height;
}

    // Setters (kiểm tra giá trị hợp lệ)
    setWidth(width) {
    if (width > 0) {
    this.width = width;
} else {
    console.error('Chiều rộng phải lớn hơn 0');
}
}

    setHeight(height) {
    if (height > 0) {
    this.height = height;
} else {
    console.error('Chiều cao phải lớn hơn 0');
}
}

    // Calculate Area
    getArea() {
    return this.width * this.height;
}

    // Calculate Perimeter
    getPerimeter() {
    return (this.width + this.height) * 2;
}

    // Vẽ hình chữ nhật trên canvas
    draw(ctx) {
    ctx.fillStyle = '#fa4b2a';
    ctx.fillRect(10, 10, this.width, this.height);
}
}

    // Khởi tạo đối tượng Rectangle
    const myRectangle = new Rectangle(150, 50);

    // Cập nhật width sau khi thay đổi
    myRectangle.setWidth(200);

    // Hiển thị kết quả
    document.write(`Chiều rộng đã cập nhật: ${myRectangle.getWidth()}<br>`);
    document.write(`Chiều cao: ${myRectangle.getHeight()}<br>`);
        document.write(`Diện tích: ${myRectangle.getArea()}<br>`);
            document.write(`Chu vi: ${myRectangle.getPerimeter()}<br>`);

                // Kiểm tra canvas tồn tại và vẽ hình chữ nhật
                const canvas = document.getElementById("DemoCanvas");
                if (canvas) {
                    const ctx = canvas.getContext('2d');
                    myRectangle.draw(ctx);
                } else {
                    console.error("Canvas không tồn tại trên trang!");
                }

