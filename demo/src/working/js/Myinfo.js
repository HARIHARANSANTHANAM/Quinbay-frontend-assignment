export default {
    name:"MyInfo",
    methods : {
        CalculatePercentage: function(student){
            return (student.mark/student.total)*100;
        },
        showFullName(student){
            student.fullName=student.firstName+student.lastName;
        }
    },
    data(){
        return{
           students:[ 
            {
                firstName:"Nagadeepan",
                lastName:"S",
                src:{
                    url:"https://images.pexels.com/photos/15030875/pexels-photo-15030875.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
                    width:250,
                    height:300
                },
                age:21,
                college:"Coimbatore Institute of Technology",
                total:500,
                mark:300,
                fullName:""
            },
            {
                firstName:"Hariharan",
                lastName:"S",
                src:{
                    url:"https://images.pexels.com/photos/15030875/pexels-photo-15030875.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
                    width:250,
                    height:300
                },
                age:21,
                college:"Coimbatore Institute of Technology",
                total:500,
                mark:56,
                fullName:""
            }
           
        ]
        }
    }
}