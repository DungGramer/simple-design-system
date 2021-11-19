import Flag from '@molecules/flag/Flag';

const FlagActions = () => {
  return (
    <>
      <Flag
        description="Scott Farquhar published a new version of this page. Refresh to see the changes."
        title="New version published"
        appearance="info"
        actions={[
          {
            content: 'View issue',
            onClick: () => {
              console.log('flag action clicked');
            },
          },
          {
            content: 'Add to next sprint',
            href: '/components/flag/examples#actions',
            target: '_blank',
          },
        ]}
      />
    </>
  );
};

export default FlagActions;
