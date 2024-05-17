let http=require("http")
let serve=http.createServer(function(req,res)
{
    console.log("hi");
    res.end(`Welcome from server ${req.url}`);
})
serve.listen(3000);