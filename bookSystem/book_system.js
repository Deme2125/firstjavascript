let books=[];
function addBook()
{
    const bookname=document.getElementById('bookname').Value;
    const authorname=document.getElementById('authorname').Value;
    const bookdescription=document.getElementById('bookdescription').Value;
    const pagesnumber=parseInt(document.getElementById('pagesnumber').Value);
    // if(bookname && authorname && bookdescription && pagesnumber)
    // {
         if (bookname && authorname && bookdescription && !isNaN(pagesnumber)) {
        const book={
            name:bookname,
            authorname:authorname,
            bookdescription:bookdescription,
            pagesnumber:pagesnumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    }
    else{
        alert('please fill in all fieldes correctly.');
    }
    }

    function showbooks(){
        const booksDiv=books.map((book,index) => `<h2>book Number : ${index+1}</h2>
        <p> <strong>Book Name: </strong> ${book.name}</p>
        <p> <strong>Author Name: </strong> ${book.authorname}</p>
        <p> <strong>Book Description: </strong> ${book.bookdescription}</p>
        <p> <strong>Number of pages : </strong> ${book.pagesnumber}</p>`);
        document.getElementById('books').innerHTML = booksDiv.join(' ');
    }
     function clearInputs() {
            document.getElementById('bookName').value = '';
            document.getElementById('authorName').value = '';
            document.getElementById('bookDescription').value = '';
            document.getElementById('pagesNumber').value = '';
 }