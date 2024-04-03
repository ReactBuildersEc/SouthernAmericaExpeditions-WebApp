// contract de prueba  desplegado desde remix a goerli. 
pragma solidity ^ 0.8.18;

contract Pay{
    address payable Sender;
    address payable receiver;
    uint256 amount;
    uint256 contracttvl;
    mapping(address=>bool)public paid;

     event Received(address indexed sender, uint256 value);

constructor(address payable _to, uint256 _amount)payable{
receiver = _to;
amount = _amount;
    }

function MakePayment(address payable _to,uint256 _amount) public payable{
   (bool sent,) = _to.call{value: _amount}("");
    require(_amount >= amount);
    require(sent, "Failed to send Ether");
    paid[msg.sender] = true;
    contracttvl += _amount;
}

function getcontracttvl() public view returns(uint256){
    return contracttvl;
}

    receive() external payable{
    emit Received(msg.sender, msg.value);
    }

}