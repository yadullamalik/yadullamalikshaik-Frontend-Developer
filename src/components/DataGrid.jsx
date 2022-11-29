import React from "react";
import { useEffect } from "react";
import "./DataGrid.css";
import { useDispatch, useSelector } from "react-redux";
import { changeOffset, getData } from "../Redux/action";
import { useState } from "react";
import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export const DataGrid = () => {
  const offset = useSelector((state) => state.offset);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    dispatch(getData(offset));
  }, []);
  useEffect(() => {
    dispatch(getData(offset));
  }, [offset]);
  return (
    <div>
      <div className="main">
        {data.map((e) => {
          return (
            <div onClick={() => setModal(true)}>
              <Card e={e} setModalData={setModalData} />
            </div>
          );
        })}
      </div>
      <div className="btn-div">
        <button
          onClick={() => {
            dispatch(changeOffset(offset - 1));
          }}
          disabled={offset == 1}
          className={`btn`}
          style={
            offset == 1 ? { cursor: "not-allowed" } : { cursor: "pointer" }
          }
        >
          Prev
        </button>
        <button
          onClick={() => {
            dispatch(changeOffset(offset + 1));
          }}
          className="btn"
        >
          Next
        </button>
      </div>
      {modal && (
        <div className="modal">
          <button onClick={() => setModal(false)} className="close">
            X
          </button>
          <div className="modal-content">
            <div>
              <img src={modalData.links.mission_patch_small} alt="" />
            </div>
            <div>
              <h1 className="font-bold text-2xl">{modalData.mission_name}</h1>
              <h5 className="name">
                <span className="un-line">Rocket Name: </span>
                {modalData.rocket.rocket_name}
              </h5>
              <p>
                <span className="un-line">Status: </span>
                {modalData.launch_success ? "True" : "False"}
              </p>
              <h5>
                <span className="un-line">Rocket Type: </span>
                {modalData.rocket.rocket_type}
              </h5>
              {modalData.launch_failure_details?.reason && (
                <p>
                  <span className="un-line">Launch Fail:</span>
                  {modalData.launch_failure_details?.reason}
                </p>
              )}
              <p>
                <span className="un-line">Launch Year: </span>
                {modalData.launch_year}
              </p>
              <a href={modalData.links.article_link}>Article Details</a>
              <br />
              <a href={modalData.links.video_link}>Video</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Card({ e, setModalData }) {
  return (
    <Center
      py={6}
      className="card-1"
      onClick={() => {
        setModalData(e);
      }}
    >
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
        gap="20px"
      >
        <Flex flex={1} bg="blue.200">
          <Image
            boxSize="100%"
            w={{ sm: "150px", md: "250px" }}
            h={{ sm: "150px", md: "200px" }}
            src={e.links.mission_patch_small}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="left"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {e.mission_name}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            Rocket Name: {e.rocket.rocket_name}
          </Text>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            Status: {e.launch_success ? "True" : "False"}
          </Text>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            Rocket Type: {e.rocket.rocket_type}
          </Text>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            Launch Fail: {e.launch_failure_details?.reason}
          </Text>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            Launch Year: {e.launch_year}
          </Text>
          <a target={"blank"} href={e.links.article_link}>
            Article Details
          </a>
          <br />
          <a target={"blank"} href={e.links.video_link}>
            Video
          </a>
        </Stack>
      </Stack>
    </Center>
  );
}
