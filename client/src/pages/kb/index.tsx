import React, { useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useGlobalStore } from '@/store/global';
import { useRouter } from 'next/router';
import { useUserStore } from '@/store/user';
import SideBar from '@/components/SideBar';
import KbList from './components/KbList';
import KbDetail from './components/Detail';

const Kb = () => {
  const router = useRouter();
  const { kbId = '' } = router.query as { kbId: string };
  const { isPc } = useGlobalStore();
  const { lastKbId } = useUserStore();

  // redirect
  useEffect(() => {
    if (isPc && !kbId && lastKbId) {
      router.replace(`/kb?kbId=${lastKbId}`);
    }
  }, [isPc, kbId, lastKbId, router]);

  return (
    <Flex h={'100%'} position={'relative'} overflow={'hidden'}>
      {/* 模型列表 */}
      {(isPc || !kbId) && (
        <SideBar w={['100%', '0 0 250px', '0 0 270px', '0 0 290px']}>
          <KbList kbId={kbId} />
        </SideBar>
      )}
      {!!kbId && (
        <Box flex={'1 0 0'} w={0} h={'100%'} position={'relative'}>
          <KbDetail kbId={kbId} />
        </Box>
      )}
    </Flex>
  );
};

export default Kb;
