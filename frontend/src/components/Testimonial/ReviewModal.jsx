import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios"; // Import axios for making HTTP requests
import useShowToast from "../../Hooks/useShowToast";
import { useState } from "react";

function ReviewModal({ onClose, isOpen }) {
  const showToast = useShowToast();
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    if (!name.trim() || !review.trim()) {
      showToast("Error", "Name and review cannot be empty", "error");
      return;
    }

    setIsLoading(true);
    try {
      // Send a POST request to your API endpoint
      const response = await axios.post(
        "http://localhost:3000/api/testimonials",
        {
          name: name,
          review: review,
        }
      );

      // Check if the request was successful

      // Show success toast
      if (response.status === 201) {
        showToast(
          "Review submitted",
          "Your review has been successfully submitted",
          "success"
        );
        onClose();
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      showToast("Error", "Failed to submit review", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={"20px"} bg={"gray.700"}>
          <ModalHeader className=" text-gray-200 ">
            Enter Your Review
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl>
              <FormLabel size={"sm"} color={"white"}>
                Name
              </FormLabel>
              <Input
                type="text"
                size={"sm"}
                placeholder="Enter your name"
                border={' 2px solid white'}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FormLabel size={"sm"} color={"white"}>
                Review
              </FormLabel>
              <Textarea
                placeholder="Enter your review description"
                border={' 2px solid white'}
                size="sm"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter display={'flex'} justifyContent={'space-between'} bg={'black'}>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              color={"black"}
              _hover={{ variant: "gost" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ReviewModal;
