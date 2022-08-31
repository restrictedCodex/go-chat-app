import React, { Component } from "react";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";
import "./app.css";

import { connect, sendMsg } from "./api/index";
