//Sample code won't run
function Person(){
    self=this;
    this.interest =20;
    function getAge(){
        ajax{
            success:function(){
                //In ES 5
                self.interest
                //In ES 6
                this.interest
            }
        }
    }
}