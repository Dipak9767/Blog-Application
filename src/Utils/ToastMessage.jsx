import { useToast } from "@chakra-ui/react"

export const ToastMessage = () => {
  const toast = useToast();
  const toastMessage = (message) => {
    let msg ;
    let status;
    if(message.status === 200){
      msg = message.message;
      status = 'success' ;
    }else{
      msg = message.message;
      status ='error';
    }
    toast({
      title: status,
      description:msg,
      status: status,
      duration: 1000,
      isClosable: true,
    })
  }
  return { toastMessage };
}