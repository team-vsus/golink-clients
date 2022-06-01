import React from "react";
import { Button } from '@chakra-ui/react';
import { Avatar } from "@chakra-ui/avatar";
import {
    Box,
    Center,
    Divider,
    Flex,
    HStack,
    Text,
    VStack,
} from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { Plus } from "react-feather";
import {
    DragDropContext,
    Draggable,
    Droppable,
    DroppableProvided,
    DropResult,
    DroppableStateSnapshot,
    DraggableProvided,
    DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { move, reorder } from "../../utils/dnd";
import { useQuery, useQueryClient } from "react-query";

interface Props {

}

const Pipeline: React.FC<Props> = () => {
    /*const { data, isLoading } = useQuery<Response<ColumnAttributes[]>>(
        "columns",
        () => getColumns(board.id)
    );*/

    const data = {} as any

    /*const [selectedBoard, setBoard] =
        React.useState<BoardAttributes | null>(null);*/

    //const queryClient = useQueryClient();
    //if (isLoading) return null;

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;
        let columns = data!.data;

        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const col = columns.find(
                (el: any) => el.id.toString() === source.droppableId
            )!;
            const tasks = reorder(col.tasks!, source.index, destination.index);
            /*queryClient.setQueryData<any>(
                "columns",
                (prev) => ({
                    data: prev!.data.map((item) =>
                        item.id.toString() === source.droppableId ? { ...col, tasks } : item
                    ),
                    message: prev!.message,
                    success: prev!.success,
                })
            );*/
            //setColumns(prev => prev.map(item => item.id.toString() === source.droppableId ? { ...col, tasks } : item))
        } else {
            const sourceCol = columns.find(
                (el: any) => el.id.toString() === source.droppableId
            )!;
            const destCol = columns.find(
                (el: any) => el.id.toString() === destination.droppableId
            )!;
            const resultFromMove = move(
                sourceCol.tasks!,
                destCol.tasks!,
                source,
                destination
            );

            /*queryClient.setQueryData<Response<ColumnAttributes[]>>(
                "columns",
                (prev) => ({
                    data: prev!.data.map((item) => {
                        if (item.id.toString() === source.droppableId) {
                            return {
                                ...sourceCol,
                                tasks: resultFromMove[source.droppableId],
                            };
                        } else if (item.id.toString() === destination.droppableId) {
                            return {
                                ...destCol,
                                tasks: resultFromMove[destination.droppableId],
                            };
                        }
                        return item;
                    }),
                    message: prev!.message,
                    success: prev!.success,
                })
            );*/

            /*setColumns(prev => {
                return prev.map(item => {
                    if (item.id.toString() === source.droppableId) {
                        return { ...sourceCol, tasks: resultFromMove[source.droppableId] }
                    } else if (item.id.toString() === destination.droppableId) {
                        return { ...destCol, tasks: resultFromMove[destination.droppableId] }
                    }
                    return item;
                })
            })*/
        }
    };
    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <VStack h="100%" spacing={5}>
                    <HStack alignItems="flex-start" w="100%" spacing={5}>
                        <KanbanColumn id={0}></KanbanColumn>
                        <KanbanColumn id={1}></KanbanColumn>
                        <KanbanColumn id={2}></KanbanColumn>
                        {/*{data &&
                            data.success &&
                            data.data.length !== 0 &&
                            data.data.map((test: any, i: number) => (
                                <KanbanColumn key={i}></KanbanColumn>
                            ))}*/}
                    </HStack>
                </VStack>
            </DragDropContext>
        </>
    );
};

type KanbanColumnProps = {
    id: number;
};

const KanbanColumn: React.FC<KanbanColumnProps> = ({id}) => {
    return (
        <>
            <Box
                w="280px"
                h="auto"
                bg="brand.200"
                borderRadius="10px"
            >
                <Box>
                    <VStack
                        p="10px"
                        sx={{
                            "& > *": {
                                width: "100%",
                            },
                        }}
                        spacing={2}
                    >
                        <Flex justifyContent="space-between" alignItems="center" h="100%">
                            <Text color="brand.500" fontWeight="bold">
                                test2
                            </Text>
                            <Center
                                h="32px"
                                w="32px"
                                border="1px solid white"
                                borderRadius="5px"
                                color="brand.500"
                            >
                                1
                            </Center>
                        </Flex>
                        <Droppable droppableId={id.toString()}>
                            {(
                                provided: DroppableProvided,
                                snapshot: DroppableStateSnapshot
                            ) => (
                                <VStack ref={provided.innerRef} {...provided.droppableProps}>
                                    {/*{tasks &&
                                        tasks.length !== 0 &&
                                        tasks.map((item, i) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id.toString()}
                                                index={i}
                                            >
                                                {(
                                                    providedDraggable: DraggableProvided,
                                                    snapshotDraggable: DraggableStateSnapshot
                                                ) => (
                                                    <KanbanTask
                                                        date={"Jun 24"}
                                                        content={item.name}
                                                        providedDraggable={providedDraggable}
                                                    />
                                                )}
                                            </Draggable>
                                        ))}*/}

                                    <Draggable
                                        key={1}
                                        draggableId={"1"}
                                        index={0}
                                    >
                                        {(
                                            providedDraggable: DraggableProvided,
                                            snapshotDraggable: DraggableStateSnapshot
                                        ) => (
                                            <KanbanTask
                                                date={"Jun 24"}
                                                content={"test"}
                                                providedDraggable={providedDraggable}
                                            />
                                        )}
                                    </Draggable>
                                    {provided.placeholder}
                                </VStack>
                            )}
                        </Droppable>
                    </VStack>
                </Box>
            </Box>
        </>
    );
};

type KanbanTaskProps = {
    date: string;
    content: string;

    providedDraggable: DraggableProvided;
};

const KanbanTask: React.FC<KanbanTaskProps> = ({
    date,
    content,
    providedDraggable,
}) => {
    return (
        <Box
            ref={providedDraggable.innerRef}
            {...providedDraggable.draggableProps}
            {...providedDraggable.dragHandleProps}
            style={{ ...providedDraggable.draggableProps.style }}
            w="100%"
            borderRadius="10px"
            p="10px"
            bg="brand.800"
        >
            <VStack>
                <Flex w="100%" justifyContent="space-between" alignItems="center">
                    <Text fontSize="16px" fontWeight="bold" color="var(--text-primary)">
                        {date}
                    </Text>
                    <Avatar size="sm" />
                </Flex>
                <Text fontSize="md" color="white" textAlign="start" w="100%">
                    {content}
                </Text>
                <Flex
                    flexWrap="wrap"
                    alignItems="flex-start"
                    w="100%"
                    sx={{
                        "& > *": {
                            margin: "3px",
                        },
                    }}
                >
                    <Tag size="sm">Sample</Tag>
                </Flex>
            </VStack>
        </Box>
    );
};

export default Pipeline;