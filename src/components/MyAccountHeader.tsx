import {updateUser} from '@/api/ApiCalls/User';
import copyIcon from '@/assets/copy-icon.png';
import editIcon from '@/assets/edit-icon.png';
import editProfile from '@/assets/edit-profile.png';
import accountHeroSm from '@/assets/hero-account-sm.jpg';
import accountHero from '@/assets/hero-account.jpg';
import userIcon from '@/assets/user.png';
import {useBreakpoint, useLogin} from '@/hooks';
import {commonStyles} from '@/styles';
import {colors, fontFamily, shortenAddress} from '@/utils';
import {usePrivy} from '@privy-io/react-auth';
import {Col, Flex} from 'antd';
import {useRef, useState} from 'react';
import {useAccount} from 'wagmi';
import {useUser} from '../contexts/UserContext';
import Button from './Button';
import Text from './Text';

type Props = {};

const MyAccountHeader = (props: Props) => {
  const {address} = useAccount();
  const [loading, setLoading] = useState(false);
  const [editingUsername, setEditingUsername] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const {xs, sm, md, lg, xl, xxl} = useBreakpoint();
  const {user, linkWallet, ready, unlinkWallet} = usePrivy();
  const {handleLogout} = useLogin();
  const {user: backendUser, loading: userLoading, refreshUser} = useUser();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(user?.wallet?.address || '')
        .then(() => {})
        .catch((err) => {
          console.error('Failed to copy: ', err);
        });
    } else {
      console.error('Clipboard API not supported');
    }
  };

  const handleLinkWallet = () => {
    setLoading(true);
    linkWallet();
    setLoading(false);
  };

  const handleUsernameSubmit = async () => {
    setLoading(true);
    try {
      const payload = new FormData();
      payload.append('username', newUsername.replace(/\s+/g, ''));

      const response = await updateUser(payload, backendUser?.id || 0);
      if (response?.status && response.status === 'success') {
        refreshUser();
      }
      setEditingUsername(false);
    } catch (error) {
      console.error('Failed to update username:', error);
    }
    setLoading(false);
  };

  const handleProfilePictureSubmit = async () => {
    if (!selectedFile) return;
    setLoading(true);
    try {
      const payload = new FormData();
      payload.append('profile_picture', selectedFile);

      const response = await updateUser(payload, backendUser?.id || 0);
      if (response?.status && response.status === 'success') {
        refreshUser();
      }
      setSelectedFile(null);
      setPreviewUrl(null);
    } catch (error) {
      console.error('Failed to upload profile picture:', error);
    }
    setLoading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setSelectedFile(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl(null);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Col
      span={24}
      style={{
        ...commonStyles.card,
        backgroundImage: `url(${md ? accountHero : accountHeroSm})`,
        backgroundPosition: md ? 'center right' : 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: md ? 36 : 16,
        paddingTop: md ? 36 : 130,
      }}>
      <Flex gap={24}>
        {previewUrl || backendUser?.profile_picture ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              position: 'relative',
              padding: '4px',
            }}>
            <img
              src={previewUrl || backendUser?.profile_picture}
              style={{
                width: sm ? 137 : 102,
                height: sm ? 137 : 102,
                borderRadius: '12px',
              }}
            />
            {selectedFile && (
              <Button
                style={{
                  marginTop: 10,
                }}
                disabled={loading}
                loading={loading}
                onClick={handleProfilePictureSubmit}>
                Save image
              </Button>
            )}

            {!selectedFile && (
              <div
                style={{
                  right: '10px',
                  bottom: '10px',
                  display: 'flex',
                  padding: '4px',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: '10px',
                  borderRadius: '4px',
                  background: 'rgba(0, 0, 0, 0.65)',
                  cursor: 'pointer',
                  position: 'absolute',
                }}
                onClick={triggerFileInput}>
                <img
                  src={editProfile}
                  style={{
                    width: 15,
                    height: 15,
                  }}
                />
              </div>
            )}
          </div>
        ) : (
          <div>
            <div
              style={{
                minWidth: sm ? 137 : 102,
                minHeight: sm ? 137 : 102,
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.10)',
                background: 'rgba(255, 255, 255, 0.10)',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                flexDirection: 'column',
                fontSize: '16px',
              }}
              onClick={triggerFileInput}>
              <img
                src={userIcon}
                style={{width: '60px', height: '60px', flexShrink: 0}}
              />
              <Text
                style={{
                  fontFamily: fontFamily.darkerGrotesque,
                  fontSize: sm ? 20 : 16,
                  fontWeight: 500,
                  color: colors.white50,
                  lineHeight: '100%',
                }}>
                Upload a picture
              </Text>
            </div>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{display: 'none'}}
        />

        <Flex
          gap={16}
          style={{
            flexDirection: 'column',
          }}>
          {editingUsername ? (
            <div
              style={{
                display: 'flex',
                padding: '8px 8px 8px 12px',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '4px',
                background: colors.white13,
              }}>
              <input
                style={{
                  color: 'rgba(255, 255, 255, 0.75)',
                  fontFamily: fontFamily.spaceGrotesk,
                  fontSize: '22px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  letterSpacing: '-0.66px',
                  border: 'none',
                  background: 'none',
                }}
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="ENTER A USERNAME"
              />
              <Button
                style={{marginLeft: 10}}
                disabled={loading}
                loading={loading}
                onClick={handleUsernameSubmit}>
                Save
              </Button>
            </div>
          ) : (
            <Text
              style={{
                fontFamily: fontFamily.spaceGrotesk,
                fontSize: sm ? 24 : 18,
                fontWeight: 700,
                textTransform: 'uppercase',
              }}>
              @{backendUser?.username}
              <img
                style={{
                  width: sm ? 17 : 17,
                  height: sm ? 17 : 17,
                  cursor: 'pointer',
                  marginLeft: '10px',
                }}
                src={editIcon}
                onClick={() => setEditingUsername(true)}
              />
            </Text>
          )}

          {!user?.wallet && (
            <Button
              className="text-tail-end"
              style={{width: 187}}
              disabled={!ready}
              onClick={handleLinkWallet}
              loading={!ready || loading}>
              Link Wallet
            </Button>
          )}
          {user?.wallet && (
            <Flex align="center" gap={10}>
              <Text
                className="clamp-1-line"
                style={{
                  fontFamily: fontFamily.darkerGrotesque,
                  fontSize: sm ? 20 : 16,
                  fontWeight: 500,
                  color: colors.white50,
                  lineHeight: '100%',
                }}>
                {shortenAddress(user?.wallet?.address as string, 6)}
              </Text>
              <img
                src={copyIcon}
                onClick={handleCopy}
                style={{
                  width: sm ? 20 : 16,
                  height: sm ? 20 : 16,
                  cursor: 'pointer',
                }}
              />

              {user?.twitter && (
                <Text
                  className="clamp-1-line"
                  style={{
                    fontFamily: fontFamily.darkerGrotesque,
                    fontSize: sm ? 20 : 16,
                    fontWeight: 500,
                    color: colors.secondary,
                    lineHeight: '100%',
                    cursor: 'pointer',
                  }}
                  disabled={loading}
                  onClick={() => {
                    setLoading(true);
                    unlinkWallet(user?.wallet?.address || '');
                    setLoading(false);
                  }}>
                  Disconnect
                </Text>
              )}
            </Flex>
          )}
          <Button
            secondary
            style={{
              alignSelf: 'flex-start',
              width: 187,
            }}
            disabled={loading}
            loading={loading}
            onClick={() => {
              setLoading(true);
              handleLogout();
              setLoading(false);
            }}>
            Logout
          </Button>
        </Flex>
      </Flex>
    </Col>
  );
};

export default MyAccountHeader;
