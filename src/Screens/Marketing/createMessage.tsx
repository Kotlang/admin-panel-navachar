/* eslint-disable */

import React, { useEffect, useState } from "react";
import navArrowIcon from "src/assets/icons/navArrowIcon.svg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MediaParameters, MessagingTemplate } from "src/generated/messaging-service_pb";
import clients from "src/clients";
import { IFetchTemplateRequest } from "src/types";
import { ICreateLeads } from "src/types";
import * as XLSX from 'xlsx';
import { MesssageRequest } from "src/generated/messaging-service_pb";

const CreateMessage = () => {
    const navigate = useNavigate()
    const [isImporting, setIsImporting] = useState(false);
    const [template, setTemplate] = useState<MessagingTemplate>()
    const [recepientPhoneNumber, setRecepientPhoneNumber] = useState<string[]>([])
    const [recepientName, setRecepientName] = useState<string[]>([])
    const handleSelectTemplate = () => {
        navigate('/marketing/messaging/templateselection')
    }
    const { templateId } = useParams()

    async function fetchTemlateDetails(templateId: string): Promise<MessagingTemplate> {
        return new Promise((resolve, reject) => {
            const fetchTemplateRequest: IFetchTemplateRequest = {
                templateId: templateId
            }
            clients.messaging.messaging.FetchTemplates(fetchTemplateRequest, {}, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res.getTemplatesList()[0]);
                }
            })
        })
    }

    async function broadCastMessage() {
        if (templateId && recepientPhoneNumber.length > 0 && template) {
            const messageRequest = new MesssageRequest();
            messageRequest.setTemplateid(templateId);
            messageRequest.setRecipientphonenumberList(recepientPhoneNumber);
            template.getHeaderparametersMap().forEach((value: string, key: string) => {
                messageRequest.getHeaderparametersMap().set(key, value);
            })
            template.getBodyparametersMap().forEach((value: string, key: string) => {
                messageRequest.getBodyparametersMap().set(key, value);
            })
            messageRequest.setWabaid(template.getWabaid());
            messageRequest.setMediaparameters(template.getMediaparameters());
            const metaData = null;
            console.log(messageRequest);
            clients.messaging.messaging.BroadCastMessage(messageRequest, metaData, (err, res) => {
                if (err) {
                    console.error("Error While Sending Message", err)
                } else {
                    console.log("Message Sent", res)
                }
            })
        }
    }

    const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { type, files } = e.target;
        if (type === "file") {
            if (files && files[0]) {
                setIsImporting(true);
                try {
                    const ab = await files[0].arrayBuffer();
                    const wb = XLSX.read(ab);
                    const wsname = wb.SheetNames[0];
                    const ws = wb.Sheets[wsname];
                    const rows: ICreateLeads[] = XLSX.utils.sheet_to_json<ICreateLeads>(ws, { header: 1 });
                    rows.slice(1).forEach(async (colName: any) => {
                        setRecepientPhoneNumber(prevPhoneNumber => [...prevPhoneNumber, '91'+colName[0]]);
                        setRecepientName(prevName => [...prevName, colName[1]]);
                    });
                } catch (err) {
                    console.error("Error While Extracting Data", err)
                } finally {
                    setIsImporting(false);
                }
            }
        }
    };

    const handleSubmit = async () => {
        await broadCastMessage();
        window.location.reload();
    }

    useEffect(() => {
        const fetchData = async () => {
            if (templateId) {
                const fetchedTemplate = await fetchTemlateDetails(templateId);
                setTemplate(fetchedTemplate);
            }
        };
        fetchData();
    }, [templateId]);

    return (
        <>
            {isImporting && (
                <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
                </div>
            )}
            <div className="mt-14">
                <div className="flex mb-6">
                    <div className="flex">
                        <img src={navArrowIcon} alt="" />
                    </div>
                    <h2 className="flex w-full justify-center text-w_text font-barlow font-regular text-2xl leading-7 tracking-[10px] m-3 ">
                        Create Message
                    </h2>
                </div>

                <div className=" bg-zinc-900 border border-gray-300 rounded px-4 py-4">

                    <div className="flex justify-between px-6">
                        <div className="flex flex-row items-center gap-2">
                            <p className=" text-lg">Select Template</p>
                            <button
                                onClick={handleSelectTemplate}
                            >
                                <svg
                                    className="h-6 w-6 text-green-500"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    {" "}
                                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                                    <line x1="12" y1="5" x2="12" y2="19" />{" "}
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            {template && <p className=" text-lg">{template.getTemplatename()}</p>}
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="file-upload" className="flex flex-row items-center gap-x-2">
                                <svg
                                    className="h-6 w-6 text-gray-500"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    {" "}
                                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />{" "}
                                    <polyline points="7 9 12 4 17 9" />{" "}
                                    <line x1="12" y1="4" x2="12" y2="16" />
                                </svg>
                                <p className=" text-lg">Select Leads</p>
                            </label>
                            <input
                                type="file"
                                id="file-upload"
                                onChange={handleImport}
                                style={{ display: "none" }}
                                accept=".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                            />
                        </div>
                    </div>

                    {recepientPhoneNumber.length > 0 && (
                        <div className="flex flex-col w-[40%] gap-4 px-6 mt-4">
                            <p className=" font-bold text-yellow-400 text-lg">Selected Leads</p>
                            <div className="flex flex-col gap-2 p-4 bg-gray-700">
                                {recepientPhoneNumber.map((phone, index) => (
                                    <div key={index} className="flex p-2 border justify-between flex-row gap-x-3">
                                        <p>{recepientName[index]}</p>
                                        <p>{phone}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex mt-4 p-4">
                        <button className="p-2 bg-green-700 font-bold rounded-lg "
                            onClick={handleSubmit}
                        >
                            Launch Message
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CreateMessage;
